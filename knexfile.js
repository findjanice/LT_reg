// knex.js is a sql query builder
// see http://knexjs.org/ for docs
// This is the credentials for the mysql database on LT Web server
module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'lonetree_alchemy',
    password: 'FmDev@lchemy',
    database: 'lonetree_registration'
  },
  debug: true
}


// module.exports = {
//   client: 'mysql',
//   connection: {
//     user: 'janicea',
//     password: 'jad3a',
//     database: 'lt_data'
//   },
//   debug: true
// }
