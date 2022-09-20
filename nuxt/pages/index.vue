<template>
  <div>
    <div>
      <el-cascader
      :options="sysData"
      :props="{ checkStrictly: true }"
      class="mx-14 mt-5"
      :show-all-levels="false"
      @change="selectChange"
      clearable></el-cascader>
    </div>
    <div class="mx-14 my-5">
      <ul class="grid grid-cols-4 gap-4">
        <li 
        v-for="item in goodsData" 
        :key="item.id"
        class="rounded-lg border-2 border-gray-200 border-solid shadow-lg p-4"
        >
          <div  class="w-full h-36"><img :src="item.image" class="h-full m-auto"></div>
          <p class="text-2xl">{{item.name}}</p>
          <p>商品类别:{{item.category.name}}</p>
          <p>商品说明:{{item.description}}</p>
          <p>可接受预订:{{item.preorderable}}</p>
          <p>预订按金:{{item.advance}}</p>
          <p>需要付按金:{{item.require_advance}}</p>
          <p class="text-2xl">售价:{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods, getSys } from '../api/index'

export default {
  name: 'IndexPage',
  data() {
    return {
      goodsDatas: '',
      sysDatas: ''
    }
  },
  computed: {
    goodsData() {
      return this.goodsDatas
    },
    sysData() {
      return this.selectData(this.sysDatas)
    }
  },
  methods: {
    selectChange(data) {
      this.getGoods(data)
    },
    selectData(arr) {
      let arrs = []
      for (let i = 0; i < arr.length; i++) {
        let obj = {value: '', label: '', children: [] }
        obj.value = arr[i].id
        obj.label = arr[i].name
        if (arr[i].children.length > 0) {
          obj.children = this.selectData(arr[i].children)
        } else {
          delete obj.children
        }
        arrs.push(obj)
      }
      return arrs
    },
    async getGoods(id) {
      const data = await getGoods('/api/products?category=' + id)
      this.goodsDatas = data.data
    },
    async getSys() {
      const data = await getSys('/api/categories')
      this.sysDatas = data.data
    }
  },
  created() {
    this.getGoods('')
    this.getSys()
  }
}
</script>
