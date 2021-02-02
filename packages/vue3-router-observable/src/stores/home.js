import { inject } from 'saxony';
import { Observable } from 'saxony-vue';

export default class AboutStore extends Observable {
  rootStore = inject('rootStore');

  foo = 'Hi';

  get bar() {
    return `${this.foo} ${this.rootStore.name}!`;
  }
}
