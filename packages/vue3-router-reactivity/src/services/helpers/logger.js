import { Service } from 'bizic';

export default class Logger extends Service {
  info(...args) { // eslint-disable-line class-methods-use-this
    console.log(...args);
  }

  error(...args) { // eslint-disable-line class-methods-use-this
    // do something
    console.error(...args);
  }
}
