import { inject } from 'bizic';
import { Observable } from 'bizic-reactivity-vue';

export default class AboutStore extends Observable {
  rootStore = inject('rootStore');

  foo = 'Hi';

  get bar() {
    return `${this.foo} ${this.rootStore.name}!`;
  }

  updateFoo(foo) {
    this.foo = foo;
  }
}
