<template>
<div>


<div class="container">
  <div class="row">
    <div class="col-md-12">
      登录模块2222  11111{{msg}}
    </div>
    <div class="col-md-3">
      <img src="http://4s.lianchexing.cn/vehicle_4s/loginVerifyCode.do" />

    </div>
    <div class="col-md-3">
        <img class="img-responsive" src="../../assets/img/demo.jpg" />
    </div>
    <div class="col-md-3" id="test">

    </div>

  </div>
</div>

</div>
</template>

<script>
import img from '../../assets/img/demo.jpg';
export default {
  data() {
    return {
      msg:"contents",
      testImg:"./assets/img/demo.jpg"
    }
  },
  mounted:function(){
    //var img = docuemt.createElements;
    var img2 = require('../../assets/img/demo.jpg');
    let element = document.createElement('img');
    element.src = img2;
    element.class = "img-responsive";

    document.getElementById('test').appendChild(element);



    console.log("img",img2);


  }
}
</script>

<style >

  #root{
    height: 100%;
  }
</style>
