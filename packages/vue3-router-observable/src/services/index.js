import Logger from './logger';

export default {
  install(bizic) {
    bizic.registerServiceFactory('logger', Logger);
  },
};
