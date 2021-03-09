import homeStoreFactory from './stores/scoped/home';
import aboutStoreFactory from './stores/scoped/about';
import rootStoreFactory from './stores/global/root';

import Logger from './helpers/logger';

export default {
  install(bizic) {
    bizic.registerServiceFactory('logger', Logger);
    bizic.registerServiceFactory('rootStore', rootStoreFactory);
    bizic.registerScopedServiceFactory('home', 'homeStore', homeStoreFactory);
    bizic.registerScopedServiceFactory('about', 'aboutStore', aboutStoreFactory);
  },
};
