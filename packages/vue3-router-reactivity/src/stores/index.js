import homeStoreFactory from './home';
import aboutStoreFactory from './about';
import rootStoreFactory from './root';

export default {
  install(bizic) {
    bizic.registerServiceFactory('rootStore', rootStoreFactory);
    bizic.registerScopedServiceFactory('home', 'homeStore', homeStoreFactory);
    bizic.registerScopedServiceFactory('about', 'aboutStore', aboutStoreFactory);
  },
};
