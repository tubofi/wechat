<template>
  <div align="center">
    <div><img width="100%" src="../assets/logo.png"></div>

    <div align="left" style="width: 90%">
      <br><div><span class="text">赛思少儿编程为每节课制定了明确的学习目标，设计了合理的课堂步骤，并通过课后练习对所学知识加以巩固</span></div>
      <div align="center"><img width="100%" src="../assets/class_presents_01.png"></div>
      <div><span class="text">课堂教学资料强调学习的主动性，以引导思考和探索为目的，不采用说教式的教学方法。</span></div>
      <br><div align="center"><video width="100%" controls="controls" autoplay="autoplay" loop src="../assets/class_presents_02.mp4"></video></div>
      <br><div><span class="text">为每位同学采集课堂视频，目的是通过讲解的形式复习课堂所学知识，锻炼孩子的表达能力</span></div>
      <br><div align="center"><video width="100%" controls="controls" src="../assets/class_presents_05.mp4"></video></div>
      <br><div align="center"><video width="100%" controls="controls" src="../assets/class_presents_06.mp4"></video></div>
      <br><div align="center"><video width="100%" controls="controls" src="../assets/class_presents_04.mp4"></video></div>
<!--      <flexbox>
        <flexbox-item><div align="center"><video width="100%" controls="controls" src="../assets/class_presents_05.mp4"></video></div></flexbox-item>
        <flexbox-item><div align="center"><video width="100%" controls="controls" src="../assets/class_presents_04.mp4"></video></div></flexbox-item>
      </flexbox>-->
      <br><div><span class="text">老师们正在认真的讲课</span></div>
      <br>
      <flexbox>
        <flexbox-item><div align="center"><img width="100%" src="../assets/class_presents_08.jpg"></div></flexbox-item>
        <flexbox-item><div align="center"><img width="100%" src="../assets/class_presents_10.jpg"></div></flexbox-item>
      </flexbox>
      <div align="center"><video width="100%" controls="controls" src="../assets/class_presents_03.mp4"></video></div>
      <br><div><span class="text">同学们也都听的很认真，希望这是他们成长过程中的一段宝贵的经历</span></div>
      <br>
      <flexbox>
        <flexbox-item><div align="center"><img width="100%" src="../assets/class_presents_09.jpg"></div></flexbox-item>
        <flexbox-item><div align="center"><img width="100%" src="../assets/class_presents_11.jpg"></div></flexbox-item>
      </flexbox>
      <divider>底部</divider>
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
