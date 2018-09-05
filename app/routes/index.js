const collectibleRoute = require('./sticker_route.js');

module.exports = function(app, db) {
    collectibleRoute(app, db);
  // Other route groups could go here, in the future
};