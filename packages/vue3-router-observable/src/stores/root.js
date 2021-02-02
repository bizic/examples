import { inject } from 'saxony';
import { Observable } from 'saxony-vue';

export default class AboutStore extends Observable {
  logger = inject('logger');

  name = 'Saxony';

  loadData() {
    this.logger.info('data loaded');
  }
}
