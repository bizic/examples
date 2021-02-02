import { Service } from 'saxony';

export default class Logger extends Service {
  info(...args) { // eslint-disable-line class-methods-use-this
    console.log(...args);
  }
}
