import { inject } from 'bizic';
import { Observable } from 'bizic-reactivity-vue';

export default class AboutStore extends Observable {
  rootStore = inject('rootStore');

  foo = 'Hello';

  get bar() {
    return `${this.foo} ${this.rootStore.name}!`;
  }
}
