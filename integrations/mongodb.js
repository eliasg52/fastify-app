const config = require('../config/config');
const mongoose = require('mongoose');

module.export = class DB {
  static connect() {
    return mongoose.connect(config.MONGODB_URI, {
      promiseLibrary: global.Promise,
      useNewURLParser: true,
    });
  }
};
