import homeStoreFactory from './home';
import aboutStoreFactory from './about';
import rootStoreFactory from './root';

export default {
  install(saxony) {
    saxony.registerServiceFactory('rootStore', rootStoreFactory);
    saxony.registerScopedServiceFactory('home', 'homeStore', homeStoreFactory);
    saxony.registerScopedServiceFactory('about', 'aboutStore', aboutStoreFactory);
  },
};
