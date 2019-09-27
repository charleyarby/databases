var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data) {
      db.connection.connect( function(err) {
        if (err) {
          console.log(err);
        } else {
          var sql = `INSERT INTO messages (userMessage) VALUES (${data})`;
          db.connection.query(sql, function(err, result) {
            if (err) {
              console.log('query err', err);
            } else {
              console.log('message saved');
            }
          });
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

