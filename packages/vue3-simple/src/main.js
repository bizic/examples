import { createApp } from 'vue';
import Saxony from 'saxony';
import { withRootProvider } from 'saxony-vue';
import App from './App.vue';

const saxony = new Saxony();

saxony.registerServiceFactory('foo', () => ({ bar: 'Welcome to Your Saxony.js App' }));

const AppWithProvider = withRootProvider(App, saxony);
const app = createApp(AppWithProvider);

app.mount('#app');
