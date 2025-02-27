import {googleApiKey as googleKey} from './Config';

class ConfigSingleton {
  static myInstance = null;

  constructor() {
    this.config = {};
    this.googleApiKey = googleKey;
  }

  static getInstance() {
    if (ConfigSingleton.myInstance == null) {
      ConfigSingleton.myInstance = new ConfigSingleton();
    }

    return ConfigSingleton.myInstance;
  }

  storeKeyValue(key, value) {
    this[key] = value;
  }

  getValueForKey(key) {
    return this[key];
  }
}

const Inst = ConfigSingleton.getInstance();

export default Inst;
