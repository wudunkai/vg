<template>
  <div id="popBox">
    <div class="w-light-box">
      <div class="head"></div>
      <div class="content">
        <video width="100%" height="100%" controls="controls" autoplay="autoplay" preload="auto" id="videos">
          <source :src="map" type="video/mp4">您的浏览器暂时无法播放此视频
        </video>
      </div>
    </div>
    <a class="closeBtn" @click="closebtn" href="javascript:;"></a>
  </div>
</template>
<script>
export default {
  props:{
    map:{default:""},
    closebtn:{type:Function}
  },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>