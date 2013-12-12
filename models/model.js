/**
 * @author dm
 * 18-aug-2013
 * 
 * A count is like an account.
 */

var MongoTools = require('../tools/mongo.js').MongoTools;
var Config = require('../config.js').Config;
var mongo = require('mongoskin');
var db = mongo.db(Config.getDBUrl());
var ObjectID = require('mongodb').ObjectID;
db.bind('modelmod');

/**
 * The Model model.
 */
var Model = function() {
};

/**
 * Get all.
 * @param string companyid, the company
 * @param function cb, the callback
 */
Model.Find = function(company_id,cb) {
  db.modelmod.find({company_id: company_id}).toArray(function(err, items) {
    cb(err, items);
  })
}

/**
 * Returns just one.
 * @param string id, the object id
 * @param function cb, the callback
 */
Model.FindOne = function(id,cb) {
  db.modelmod.findOne({ _id: new ObjectID.createFromHexString(id)},
    function(err, item) {
      cb(err, item);
  })
}

/**
 * Saves the new data.
 * @param object data, the object data
 * @param function cb, the callback
 */
Model.Create = function(data, cb) {
  db.modelmod.insert(data, function(err, item) {
    cb(err, item);
  });
}

/**
 * Remove just one.
 * @param string id, the object id
 * @param function cb, the callback
 */
Model.Destroy = function(id, cb) {
  db.modelmod.remove(
    { _id: new ObjectID.createFromHexString(id)},true, 
    function(err) {
      cb(err);
  })
}

/**
 * Change current data.
 * @param string id, the object id
 * @param object data, the object data
 * @param function cb, the callback
 */
Model.Update = function(id, data, cb) {
  db.modelmod.update(
    { _id: new ObjectID.createFromHexString(id) }, 
    {$set: data}, 
    {upsert: true},
    function(err, result) {
      db.modelmod.findOne({ _id: new ObjectID.createFromHexString(id)},
        function(err, item) {
        cb(err, item);
    })
  })
}

/**
 * Count of.
 */
Model.Count = function(cb) {
  db.modelmod.count(
    function(err, item) {
      cb(err, item);
  })
}

/**
 * Returns filtered results.
 * @param array filter, the filter ie.: {user: id}
 * @param function cb, the callback
 */
Model.FindOneByFilter = function(filter,cb) {
  db.modelmod.findOne(filter,
    function(err, item) {
      cb(err, item);
  })
}

exports.Model = Model;
 