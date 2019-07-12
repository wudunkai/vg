<template>
  <div class="wrapper">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <div class="not-found">
        <img src="../assets/common/404.png">
      </div>
      <footers></footers>
    </div>
  </div>
</template>
<script>
import Headers from '../views/common/Headers'
import Sidebar from '../views/common/Sidebar'
import Footers from '../views/common/Footers'
export default {
  data() {
    return {
      
    }
  },
  components:{
    "headers":Headers,
    "sidebar":Sidebar,
    "footers":Footers,
  },
}
</script>
<style scoped>
.not-found {
  width: 100%;
}
.not-found img {
  width: 100%;
  max-width: 100%;
}
</style>
