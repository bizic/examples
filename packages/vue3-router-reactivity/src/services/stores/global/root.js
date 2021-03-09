import { inject } from 'bizic';
import { Observable } from 'bizic-reactivity-vue';

export default class AboutStore extends Observable {
  logger = inject('logger');

  name = 'Bizic';

  loadData() {
    this.logger.info('data loaded');
  }
}
