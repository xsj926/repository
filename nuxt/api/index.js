import requset  from './request.js';

export function getGoods(url) {
    return requset({
      url: url,
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

export function getSys(url) {
 return requset({
   url: url,
   method: 'get'
  });  }