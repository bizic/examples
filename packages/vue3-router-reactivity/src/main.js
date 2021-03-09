import { createApp } from 'vue';
import Bizic from 'bizic';
import { withRootProvider } from 'bizic-vue';
import App from './App.vue';
import router from './router';
import service from './services';

const bizic = new Bizic();

bizic.use(service);

const AppWithProvider = withRootProvider(App, bizic);
const app = createApp(AppWithProvider);
app.use(router);
app.mount('#app');
