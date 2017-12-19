<template>
<div>


<div class="container">
  <div class="row">
    <head-component></head-component>
    <h2 class="text-center">
        内容列表

    </h2>
    <hr />

     <table class="table table-striped">
       <thead>
         <td>
           id
         </td>
         <td>
           name
         </td>
         <td>
           url
         </td>
         <td>
           alexa
         </td>
         <td>
           country
         </td>
       </thead>
       <tbody>
         <tr v-for="(item,index) in websitesData" key="item">
           <td>
              {{item.id}}
           </td>
           <td>
              {{item.name}}
           </td>
           <td>
              {{item.url}}
           </td>
           <td>
              {{item.alexa}}
           </td>
           <td>
              {{item.country}}
           </td>
         </tr>
       </tbody>

     </table>

  </div>
</div>

</div>
</template>

<script>
import img from '../../assets/img/demo.jpg';
import Axios from 'axios';
import headComponent from '../../compon';
export default {
  data() {
    return {

      websitesData:null
    }
  },
  components:{
    "head-component":headComponent
  },
  mounted:function(){
    Axios.post('http://192.168.18.119:8099/list').then(response => {
        console.log('response',response);
        this.websitesData = response.data;
      }).catch((error) => {
      console.log(error);
      })

  }
}
</script>

<style >

  #root{
    height: 100%;
  }
</style>
