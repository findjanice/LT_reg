// const DB = require('knex')(require('./knexfile')).DB;
//
// // post Camper information to mysql WB_d_camper table
//
// var User = DB.Model.extend({
//   tableName: 'WB_d_camper',
//   idAttribute: 'username'
// })
//
// module.exports = {
//   User: User
// };

'use strict'

var bookshelf = require('./bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'WB_d_camper'
});

module.exports = bookshelf.model('User', User);
