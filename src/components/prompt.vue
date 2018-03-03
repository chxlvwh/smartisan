<template>
  <div id="backcolor">
    <div class="promp">
      <div class="header">
        <span>提示</span>
        <div class="close" @click="closePrompt"></div>
      </div>
      <div class="content">商品已达到最大可购买数量，无法继续添加</div>
      <div class="footer"><button @click="closePrompt">确定</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closePrompt () {
        this.$store.commit('promptClose')
      }
    }
  }
</script>

<style scoped>
  #backcolor {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 999999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  #backcolor .promp {
    box-shadow: 0 8px 30px 2px #000;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    z-index: 999999;
    width: 438px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
  }
  #backcolor .promp .header {
    height: 60px;
    background: linear-gradient(to bottom, #fafafa, #ececec);
    text-indent: 30px;
    font: 16px/60px "微软雅黑";
    position: relative;
  }
  #backcolor .promp .header .close {
    width: 16px;
    height: 16px;
    background: url("/src/assets/img/ui.png") no-repeat -20px -21px;
    position: absolute;
    top: 21px;
    right: 21px;
    cursor: pointer;
  }
  #backcolor .promp .content {
    padding-top: 62px;
    height: 103px;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    font: 16px "微软雅黑";
    text-align: center;
    color: #666666;
  }
  #backcolor .promp .footer {
    height: 60px;
    background: linear-gradient(to bottom, #fafafa, #ececec);
    box-shadow: 3px 0px 5px 5px rgba(0, 0, 0, 0.05);
    position: relative;
  }
  #backcolor .promp .footer button {
    width: 100px;
    height: 38px;
    border: 1px solid #488bbd;
    background: linear-gradient(to bottom, #83a7e4, #6380cb);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
    outline: none;
    color: #fff;
    box-shadow: 0 -2px 0 0 #5877cb inset;
  }
  #backcolor .promp .footer button:active {
    box-shadow: 0px 3px 3px 3px #4570b4 inset;
    background: #5085e1;
  }
</style>
