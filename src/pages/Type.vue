<template>
  <div class="left">
    <van-sidebar v-model="active">
      <van-sidebar-item v-for="(i,index) in type" :key="i" :title="i" @click="Type(index)" style="background: transparent"/>
    </van-sidebar>
  </div>

  <div class="right">
    <div style="text-align: center">
      <van-image
          src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg"
          radius="20px"
          width="90%"
      />
    </div>

    <div style="width: 90%;background: white;margin: auto;border-radius: 20px;margin-top: 20px">
      <van-nav-bar
          @click-right=""
          style="position: inherit;border-radius: 20px;">
        <template #right>
          <div @click="jumpTypeMore" style="color: gray;">
            更多
            <van-icon name="arrow" />
          </div>
        </template>
      </van-nav-bar>

      <van-grid :column-num="2" :gutter="0" :border="false" style="margin-top: -16px;background: transparent">
        <van-grid-item v-for="(i,index) in goods.length" :key="i">
          <van-image
              :src="goods[index].image"
              width="120"
              height="90"
              radius="10px"
          />
          <span style="color: gray;font-size: 12px;margin-top: 10px">{{goods[index].commodityName}}</span>
        </van-grid-item>
      </van-grid>
      <div style="height: 20px;border-radius: 20px"></div>
    </div>
    <div style="margin-top: 10px;text-align: center;color: gray">显示更多</div>
    <div style="height: 80px"/>
  </div>
</template>


<!-- js -->
<script setup lang="ts">
import {getCurrentInstance, reactive, ref, watch} from 'vue';
import {Notify, Toast} from 'vant';
import router from '../router';
import {useStore} from "vuex";
import {key} from '../store'
import {$toRef} from "vue/macros";
const store = useStore(key)

/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties


let active = store.state.HomeTypeIndex;
const value = ref('');

const count = ref(0)
const goodsImg = ref('https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/16754df6ffb5e8ed.jpg')

const goodsType = reactive([
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'2',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'1',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
  {
    goods:[
      {
        commodity_id:'1',
        image :'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'2',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'3',
        image :'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      },
      {
        commodity_id:'4',
        image :  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
        price : 59,
        commodity_name : '秋冬2022新款渐变格子时尚披肩女外搭斗篷毛毯保暖流苏披肩男',
        data : 18
      }
    ]
  },
])

const goods = reactive([
  {
    commodityId:'',
    image :'',
    price : 0,
    commodityName : '',
    data : 0
  }
])

const type = [
  "生活",
  "数码",
  "玩乐",
  "家居",
  "文创",
  "美食",
  "装品",
  '健康',
  "穿搭",
  "运动",
]

const jumpTypeMore = () => {
  store.state.Type = type[count.value]
  router.push('/typeMore');
}

const Type = (i:any) => {
  count.value=i;
  $http.get("http://localhost:8082/goodsType/classify/"+type[i]).then((res:any)=>{
    console.log(res.data)
    goods.length=0;
    res.data.data.forEach((j:any)=>goods.push(j))
    console.log(goods)
  })
}
Type(store.state.HomeTypeIndex);


</script>


<!-- css -->
<style scoped>
.right {
  display: block;
  float: right;
  width: 79%;
  height: 830px;

}

.left {
  position: fixed;
  top: 0;
  float: left;
}

van-sidebar-item {
  --van-sidebar-width: 20%;
}

/* div{
   margin-bottom: 20px;
   margin-left: 20px;
   margin-right: 10px;
  } */
.title {
  height: 150px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
}

img {
  border-radius: 20px;
  height: 100%;
  width: 100%;
}

.midden {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 20px;
  height: 300px;
  background-color: antiquewhite;
}

.end {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 20px;
  height: 300px;
  background-color: antiquewhite;
}
</style>

