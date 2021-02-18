import { createStore } from 'vuex';
import { inject } from 'bizic';

export default function rootStoreFactory() {
  const logger = inject('logger');

  return createStore({
    state: {
      name: 'Bizic',
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
