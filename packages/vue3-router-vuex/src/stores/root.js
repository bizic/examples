import { createStore } from 'vuex';
import { inject } from 'saxony';

export default function rootStoreFactory() {
  const logger = inject('logger');

  return createStore({
    state: {
      name: 'Saxony',
    },
    mutations: {
    },
    actions: {
      loadData() {
        logger.info('data loaded');
      },
    },
  });
}
