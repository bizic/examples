import { createStore } from 'vuex';
import { inject } from 'bizic';

export default function homeStoreFactory() {
  /** @type { ReturnType<typeof import('./root').default>} */
  const rootStore = inject('rootStore');

  return createStore({
    state: {
      foo: 'Hi',
    },
    getters: {
      bar(state) {
        return `${state.foo} ${rootStore.state.name}!`;
      },
    },
  });
}
