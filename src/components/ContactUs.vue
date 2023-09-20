<template>
  <div align="center">
    <div><img width="100%" src="../assets/logo.png"></div>

    <div align="left" style="width: 90%">
      <br><div><span class="text-bold">赛思少儿编程</span></div>
      <br><div><span class="text-bold">在线咨询：</span></div>
      <div><span class="text">周老师 (添加微信 cutain008)</span></div>
      <br><div><span class="text-bold">校区地址：</span></div>
      <div><span class="text">四川省成都市武侯区万兴路729号附4号、5号、6号、7号</span></div>
      <br><div align="center"><img width="100%" src="../assets/contact_us_01.png"></div>
      <br><div><span class="text">我们在保利花园无期二楼商铺哦</span></div>
      <br>
      <flexbox>
        <flexbox-item><div align="center"><img width="100%" src="../assets/contact_us_02.jpg"></div></flexbox-item>
        <flexbox-item><div align="center"><img width="100%" src="../assets/school_profiles_01.jpg"></div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, Divider } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      Divider
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
  .num{
    font-size: 40px;
    font-weight: bolder;
    color: #f08838;
  }
  .title{
    font-size: 25px;
    font-weight: bolder;
    color: #f08838;
  }
  .text {
    font-size: large;
    line-height: 30px;
  }
  .text-bold {
    font-size: large;
    line-height: 30px;
    font-weight: bold;
  }
  .text-details {
    font-size: medium;
  }
</style>
