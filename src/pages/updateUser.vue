<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpSettings"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 32%;position: absolute;top:1.9%;left: 12%;" @click="jumpSettings">
      修改个人信息
    </div>
  </div>
  <div style="margin-left: 40%;margin-top: 15%">
  <van-uploader  :deletable="false" preview-size="150" :after-read=fileList capture="camera" accept="image/*" >
    <template #default>
      <van-image
          :src=userDetails.profilePhoto
          width="80"
          height="80"
          radius="100%"
      />
    </template>
  </van-uploader>
  </div>
  <div style="margin-top: 80px;width: 90%;margin-left: 5%">
    <span >当前账号</span>
    <span style="float: right;color: #919191">{{userDetails.userId}}</span>
    <van-divider :style="{background:'#d2d1d1'}"/>
  </div>
  <div style="margin-top: 25px;width: 90%;margin-left: 5%">
    <span>密码</span>
    <span style="float: right;color: #919191" @click="jumpUpdatePassword">更改密码 〉</span>
    <van-divider :style="{background:'#d2d1d1'}"/>
  </div>
  <div style="margin-top: 25px;width: 90%;margin-left: 5%">
    <van-cell title="生日" :value="date" @click="show = true" style="background: transparent;margin-left: -4%;font-size: 16px;margin-top: -3%;margin-bottom: -3%;width: 108.3%;"/>
    <van-calendar  v-model:show="show" @confirm="onConfirm"/>
    <van-divider :style="{background:'#d2d1d1'}"/>
  </div>
  <div style="margin-top: 25px;width: 90%;margin-left: 5%">
    <span>手机号</span>
    <span v-if="userDetails.phone!==''" style="float: right;color: #919191" @click="jumpUpdatePhone">{{userDetails.phone}}</span>
    <span v-if="userDetails.phone===''" style="float: right;color: #919191" @click="jumpUpdatePhone">绑定手机号 〉</span>
    <van-divider :style="{background:'#d2d1d1'}"/>
  </div>
  <div style="margin-top: 25px;width: 90%;margin-left: 5%">
    <span>当前地区</span>
    <span v-if="userDetails.address!==''" style="float: right;color: #919191">{{userDetails.address}}</span>
    <span v-if="userDetails.address===''" style="float: right;color: #919191" >绑定地区 〉</span>
    <van-divider :style="{background:'#d2d1d1'}"/>
  </div>


</template>

<script setup lang="ts">
/*引入路由*/
import {useRoute,useRouter} from "vue-router";
import {defineComponent, getCurrentInstance, onMounted, reactive, ref} from "vue";

/*路由变量*/
const route=useRoute();
const router=useRouter();




const userDetails = reactive({userId:'',username:'',password:'',profilePhoto:'',isMerchant:false,sex:'未知',birthday:'',phone:'',address:''})

const user=reactive(JSON.parse(route.params.u+''));


const date = ref('设置生日 〉');
const show = ref(false);

const formatDate = (date:any) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value:any) => {
  show.value = false;
  date.value = formatDate(value);
};


const fileList = (file:any) =>{
  userDetails.profilePhoto=file.content
  const forms = new FormData();
  forms.append("file", file.file);
}

const jumpUpdatePassword = () =>{
  router.push({
    name:'password',
    params:{password:userDetails.password,userId:userDetails.userId,u:route.params.u}
  })
}

const jumpSettings = () =>{
  router.push({
    name:'settings',
    params:{u:route.params.u}
  })
}

const jumpUpdatePhone = () =>{
  router.push({
    name:'phone',
    params:{userId:userDetails.userId,userPhone:userDetails.phone,u:route.params.u}
  })
}

const openUpdateUser = () =>{
  userDetails.userId=user.userId;
  userDetails.username=user.username;
  userDetails.profilePhoto=user.profilePhoto;
  userDetails.isMerchant=user.isMerchant;

}
openUpdateUser();
</script>

<style scoped>

</style>