var models = require('../models');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports = {
  messages: {
    get: function (req, res) {
      res.write('hi');
      console.log('this is get');
      res.end();
     }, // a function which handles a get request for all messages
    post: function (req, res) {
      //console.log(res, 'this is res')
      console.log(req.body, 'this is request data');
      res.end();

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) { }
  },
};

