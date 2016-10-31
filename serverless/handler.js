'use strict';

// AWS SDK setup
var AWS = require('aws-sdk');
var db = new AWS.DynamoDB({
  'region': 'ap-northeast-1'
});

// Get all vocabulary
module.exports.all = (event, context, cb) => {

  var table = event.path.class;
  var params = {
    'TableName': table,
    'Limit': 25
  };

  db.scan(params, function(err, data) {
    if (err) {
      cb(null, err);
    } else {
      cb(null, data);
    }
  });
};

// Get all vocabulary for a tag
module.exports.tag = (event, context, cb) => {

  var tag = event.path.tag;
  var params = {
    TableName: 'Vocabulary',
    FilterExpression: 'contains(Tags, :tag)',
    ExpressionAttributeValues: {':tag': {'S': tag} }
  };

  db.scan(params, function(err, data) {
    if (err) {
      cb(null, err);
    } else {
      cb(null, data);
    }
  });
};
