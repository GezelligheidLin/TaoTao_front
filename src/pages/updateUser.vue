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

  <div style="margin-left: 40%;margin-top: 7%">
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
  <div style="margin-top: 50px;background: transparent">
  <van-cell-group inset>
    <van-cell title="当前账号" :value=userDetails.userId size="large" style="margin-top: 20px"/>
    <van-cell title="用户名" is-link :value="userDetails.username" size="large" @click="updateUserName" style="margin-top: 20px"/>
    <van-popup v-model:show="showName" position="bottom">
      <van-form @submit="onSubmit" style="height: 120px">
        <van-cell-group inset>
          <van-field
              v-model=userDetails.username
              label="新用户名"
              name="新用户名"
              placeholder="新用户名"
          />
        </van-cell-group>
        <div style="margin: 16px;margin-top: 20px">
          <van-button round block type="primary" native-type="submit">
            更换用户名
          </van-button>
        </div>
      </van-form>
    </van-popup>
    <van-cell title="密码" is-link :value="userDetails.password" size="large" @click="jumpUpdatePassword" style="margin-top: 20px"/>
    <van-cell title="生日" is-link :value=userDetails.birthday size="large" @click="show = true" style="margin-top: 20px"/>
    <van-calendar  v-model:show="show" size="large" @confirm="onConfirm" style="margin-top: 20px"/>
    <van-cell title="手机号" is-link :value="userDetails.phone" size="large" @click="jumpUpdatePhone" style="margin-top: 20px"/>
    <van-cell  title="当前地区" is-link :value=userDetails.address size="large" @click="chooseArea" style="margin-top: 20px;margin-bottom: 20px"/>
    <van-popup v-model:show="showAddrPopup" position="bottom">
      <van-area
          title="选择地区"
          :area-list="areaList"
          @cancel="showAddrPopup = false"
          @confirm="confArea"
      />
    </van-popup>
  </van-cell-group>
  </div>
</template>

<script setup lang="ts">
/*引入路由*/
import {useRoute,useRouter} from "vue-router";
import {defineComponent, getCurrentInstance, onMounted, reactive, ref} from "vue";
import { areaList } from '@vant/area-data';

/*路由变量*/
const route=useRoute();
const router=useRouter();


const userDetails = reactive({userId:'',username:'',password:'更改密码',profilePhoto:'',isMerchant:false,sex:'未知',birthday:'修改生日',phone:'修改手机号',address:'修改地区'})

const user=reactive(JSON.parse(route.params.u+'')._value);

let showName = ref(false);

let showAddrPopup = ref(false);

const show = ref(false);

const onSubmit = () =>{
  showName.value = false;
}

const formatDate = (date:any) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value:any) => {
  show.value = false;
  userDetails.birthday = formatDate(value);
}

const updateUserName = () =>{
  showName.value = true;
}

const chooseArea = () =>{
  showAddrPopup.value=true;
}

const confArea = (data:any) =>{
  userDetails.address='';
  for(let i=0;i<data.length;i++) {
    if(i<data.length-1) userDetails.address += data[i].name + '-';
    else userDetails.address += data[i].name;
  }
  showAddrPopup.value = false;
}


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