'use strict';

module.exports = (req, res, next) => {
  console.log('middleware logging!');
  console.log(req.hostname);
  next();
};
