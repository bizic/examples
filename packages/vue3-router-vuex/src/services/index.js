import Logger from './logger';

export default {
  install(saxony) {
    saxony.registerServiceFactory('logger', Logger);
  },
};
