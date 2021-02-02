import { createStore } from 'vuex';
import { inject } from 'saxony';

export default function aboutStoreFactory() {
  // const logger = inject('logger');
  const rootStore = inject('rootStore');

  return createStore({
    state: {
      foo: 'Hello',
    },
    getters: {
      bar(state) {
        return `${state.foo} ${rootStore.state.name}!`;
      },
    },
    mutations: {
    },
  });
}
