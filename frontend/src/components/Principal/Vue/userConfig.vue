<script>

 import { ref } from 'vue';

 export default {
  setup() {
    const showConfig = ref(true);
    
    const closeConf = () => {
      console.log('Button clicked');
      showConfig.value = false;
    };
    
    return {
      showConfig,
      closeConf
    };
  }
};
  
</script>
<template >
    <div v-if="showConfig" class="w-1/4 bg-gray-800 absolute left-[75%] h-screen rounded-tl-lg">
        <button @click="closeConf">cerrar</button>
		</div>
    
</template>
 