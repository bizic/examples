import { createApp } from 'vue';
import Bizic from 'bizic';
import { withRootProvider } from 'bizic-vue';
import App from './App.vue';

const bizic = new Bizic();

bizic.registerServiceFactory('foo', () => ({ bar: 'Welcome to Your Bizic.js App' }));

const AppWithProvider = withRootProvider(App, bizic);
const app = createApp(AppWithProvider);

app.mount('#app');
