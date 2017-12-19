<template>
 <div>
   <ul>
     <li>
       列表
     </li>
     <li>
       新增
     </li>
     <li>
       删除
     </li>
     <li>
       更新
     </li>
   </ul>
 </div>
</template>
<script>
import axios from 'axios'; //加载异步工具
axios.defaults.timeout = unit.config.axiosDefaultsTimeout; //设置异步加载超时时间

export default {
  data() {
    return {
    }
  },
  components: {
    "alert": Alert
  },
  props: ["ActionController", "navigation", "messageStore"],
  watch: {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
