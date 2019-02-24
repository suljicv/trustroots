'use strict';

const path = require('path'),
      backend = require('../controllers/backend.server.controller'),
      config = require(path.resolve('./config/config'));

module.exports = (app) => {
  if (config.i18nBackend) {
    app.route('/api/locales/:lng/:ns').post(backend);
  }
};
