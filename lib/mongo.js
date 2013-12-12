/**
 * 
 */

var Mongo = function(){};

/**
 * Returns filtered results.
 * @param array filter, the filter ie.: {user: id}
 * @param function cb, the callback
 */
Mongo.DB = function(filter,cb) {
  var db = mongo.router(function (coll_name) {
    switch(coll_name) {
      case 'user':
      case 'message':
        return mongo.db('192.168.1.3/auth_db');
      default:
        return mongo.db('192.168.1.2/app_db');
    }
  });
  db.bind('user', require('./shared-user-methods'));
  var users = db.user; //auth_db.user
  var messages = db.collection('message'); // auth_db.message
  var products = db.collection('product'); //app_db.product
}

exports.Mongo = Mongo;