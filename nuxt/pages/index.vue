<template>
  <div>
    <div>
      <nav  :class="isPc ? 'pcMun' : 'mun'">
        <ul class="munUl" v-if="isPc">
          <li :class="'numLi'+item.id" class="numLi" @ v-for="item in numData" :key="item.id">
            <p class="numP">{{item.val}}</p>
            <div class="sub">
              <ul class="itemUl">
                  <div :class="'showItem1'" v-if="item.id == 1">
                  <li class="itemLi" v-for="ele in numData[0].numItem" :key="ele.id">
                    <a :href="ele.url">{{ele.val}}</a>
                  </li>
                </div>
                <div :class="'showItem2'" v-if="item.id == 2">
                  <li class="itemLi" v-for="ele in numData[1].numItem" :key="ele.id">
                    <a :href="ele.url">{{ele.val}}</a>
                  </li>
                </div>
                <div :class="'showItem3'" v-if="item.id == 3">
                  <li class="itemLi" v-for="ele in numData[2].numItem" :key="ele.id">
                    <a :href="ele.url">{{ele.val}}</a>
                  </li>
                </div>
              </ul>
            </div>
          </li>
        </ul>
        <div class="mun-icon" v-else>
          <i class="el-icon-menu" @click="showDilog = true"></i>
        </div>
      </nav>
    </div>
    <div :class="isPc ? 'pcFoot' : 'foot'">
      <div class="foot-box">
        <div class="footHead">
        <a href="">珠海易奇科技有限公司</a>
        <a href="">Zhuhai Eqlee Science And Technology Co.Ltd.</a>
      </div>
        <ul class="footBody">
            <li class="foot-text" v-for="item in footText" :key="item.id">
              <ul v-if="isPc || item.id == 4">
                <li><h1>{{item.val}}</h1></li>
                <li class="foot-text-li" v-for="ele in item.itemData" :key="ele.id"><h2><a href="">{{ele.val}}</a></h2></li>
              </ul>
            </li>
          <li v-if="isPc" class="foot-text">
            <ul>
              <li><h1>关注易奇自媒体</h1></li>
              <li>
                <div>
                  <div class="foot-other" v-for="item in footImg" :key="item.id">
                    <img :src="item.url"/>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      <div class="footFoot">
        <p><a href="">版权所有©1999~2021 珠海易奇科技有限公司</a></p>
        <p>Copyright ZhuHai Eqlee Science And Technology Co.Ltd，2021</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      windowWidth: null,
      showDialog: false,
      isPc: true,
      numData: [
        {val: '常用导航',id: 1,numItem: [
          {val: '51link', id: 1, url:''},
          {val: '百度搜索', id: 2, url:''},
          {val: '百度新闻', id: 3, url:''},
          {val: '站长之家', id: 4, url:''},
          {val: '新浪', id: 5, url:''},
          {val: '阿里云', id: 6, url:''}
        ]},
        {val: '深度思考',id: 2,numItem: [
          {val: '腾讯云', id: 1, url:''},
          {val: '百度推广后台', id: 2, url:''},
          {val: '红德智库', id: 3, url:''},
          {val: '星火智库', id: 4, url:''}
        ]},
        {val: '易奇导航',id: 3,numItem: [
          {val: '百度联盟', id: 1, url:''},
          {val: '百度推广', id: 2, url:''},
          {val: '百度指数', id: 3, url:''},
          {val: '百度统计', id: 4, url:''},
          {val: '百度资源', id: 5, url:''},
          {val: '首页', id: 6, url:''},
          {val: '关于易奇', id: 7, url:''},
          {val: '解决方案', id: 8, url:''},
          {val: '易奇管理', id: 9, url:''}
        ]}
      ],
      footText: [
        {val:'关于我们',id: 1,itemData: [
          {val:'关于易奇',id: 1,url: ''},
          {val:'易奇动态',id: 2,url: ''},
          {val:'客户案例',id: 3,url: ''},
          {val:'合作伙伴',id: 4,url: ''},
          {val:'常用导航',id: 5,url: ''}]},
        {val: '业务范围',id: 2,itemData: [
          {val:'易奇“我有”',id: 1,url: ''},
          {val:'易奇“新零售”系统',id: 2,url: ''},
          {val:'易奇行业解决方案',id: 3,url: ''},
          {val:'易奇“智慧旅行”',id: 4,url: ''}
        ]},
        {val:'易奇相关条款',id:3,itemData:[
          {val:'免责申请',id: 1,url: ''},
          {val:'权力申请',id: 2,url: ''},
          {val:'知识产权',id: 3,url: ''}
        ]},
        {val:'联系我们',id:4,itemData:[
          {val:'Email：lion@eqlee.com',id: 1,url: ''},
          {val:'QQ ：769319435',id: 2,url: ''},
          {val:'微信：i_lion_li',id: 3,url: ''},
          {val:'电话：0756-6181186',id: 4,url: ''},
          {val:'地址：广东省珠海市香洲区紫荆路323号3层308-310',id: 5,url: ''}
        ]}
      ],
      footImg: [
        {url:'https://www.eqlee.com/_nuxt/img/c3fb606.png',id:1,text:'易奇公众号'},
        {url:'https://www.eqlee.com/_nuxt/img/f763883.png',id:2,text:'我有公众号'},
        {url:'https://www.eqlee.com/_nuxt/img/01f9cf4.png',id:3,text:'易奇微博'},
        {url:'https://www.eqlee.com/_nuxt/img/3bb4e1c.png',id:4,text:'易奇商服'},
        {url:'https://www.eqlee.com/_nuxt/img/fc27487.png',id:5,text:'易奇抖音'}]
    }
  },
  watch: {
    windowWidth: {
      // navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      handler: function(val) {
        if (val < 670) {
          this.isPc = false
        } else {
          this.isPc = true
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.windowWidth = document.documentElement.clientWidth

    window.onresize = () => {
      return (() => {
        this.windowWidth = document.documentElement.clientWidth
      })()
    }
  },
  computed: {
  },
  methods: {
  },
  created() {
  }
}
</script>
<style scoped>
@import '../static/style/pcNum.less';
@import '../static/style/pcFoot.less';
@import '../static/style/hStyle.less';

/* @media screen and (max-width: 670px){
  @import '../static/style/pcFoot.less';
  @import '../static/style/pcNum.less';
  }
@media screen and (min-width: 670px){
  @import '../static/style/hStyle.less';
  } */
</style>