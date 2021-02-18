<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="homeStore.getters.bar"/>
  </div>
</template>

<script>
import { useService } from 'bizic-vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const homeStore = useService('homeStore');
    const logger = useService('logger');
    logger.info('homeStore', homeStore);
    return { homeStore };
  },
};
</script>
