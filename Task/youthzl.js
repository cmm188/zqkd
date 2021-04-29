const axios = require('axios');


 //随机si
    function randomString() {
      let len = 32;
      let $chars = "abcdefhijkmnprstwxyz123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
    
    
    //获取分享时间字符串
    var q=Date.parse(new Date())/1000;
    
//get 函数(j为随机si字符，q为分享的的时间，p为阅读时间)
    var aa=function(){
      
        var j = randomString();
 var p = new Date().getTime();
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253Dk5Bv92bmMjwJEOP788PrVKI9vNpxizqnBe97gxne6rYKdpWVoR%2526uid%253D47273215%2526phone_code%253Df366260adcd3a6e11e53babb137a325c%2526scid%253D37882448%2526time%253D1619662629%2526app_version%253D1.8.0%2526sign%253D45e2dcc23934ce5ca416ff65d22bffa4&_=1619662663845&jsonpcallback=jsonp6';
    
    return axios.get(url, {
    
      headers: {'Referer' : 'https://focus.youth.cn/',
    'Host' : 'script.baertt.com',
    'User-Agent' : 'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000522) NetType/WIFI Language/zh_CN'} //设置header信息
    }).then((res) => { 
      //then 成功
      console.log(j);
       console.log(p);
    }).catch((err) => {
      //catch 失败
      console.log("失败")
      
    
    });
  }




const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
  
}
const request = async function(){
  for(let i=0;i<50;i++){
    aa();
    var num=Math.ceil(Math.random() * 25);
    await sleep(num*500);
  }
}




request();
