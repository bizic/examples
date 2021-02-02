import { createApp } from 'vue';
import Saxony from 'saxony';
import { withRootProvider } from 'saxony-vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import service from './services';

const saxony = new Saxony();
saxony.use(store);
saxony.use(service);

const AppWithProvider = withRootProvider(App, saxony);
const app = createApp(AppWithProvider);
app.use(router);
app.mount('#app');
