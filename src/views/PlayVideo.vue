<template>
    <div v-horizontal-screen class="playVideo">
      <div class="header-nav">
          <span class="fn-button"><img src="../assets/顶端按钮/home.png" @click="HandleHome"></span>
          <span class="fn-button"><img src="../assets/顶端按钮/button_back.png" @click="HandleBack"></span>
      </div>
      <video  controls  preload="auto" x-webkit-airplay="true" poster="../assets/bg.png" x5-playsinline="true" webkit-playsinline="true" playsinline="true" class="myVideo" autoplay="autoplay">
         <source src="../assets/xygq.mp4" type="video/mp4" >
      </video>
    </div>
</template>

<script>
export default {
  name: 'PlayVideo',
  methods: {
      HandleHome(){
         this.$router.push({path:'/'})
      },
      HandleBack(){
         this.$router.push({path:'/'})
      }
  }
}
</script>

<style >
.myVideo{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header-nav{
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  height: 59px;
  z-index: 99;
  line-height: 35px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  width: 100%;
}
.fn-button{
  display: inline-block;
  text-align: center;
  width: 30px;
  line-height: 28px;
  height: 28px;
  border-radius: 50%;
}
.fn-button img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@media screen and (min-width:900px) and (max-width:1200px){
    .header-nav{
      padding: 13px;
    }
}
</style>
