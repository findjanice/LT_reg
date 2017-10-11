'use strict'

var knex = require('knex')(require('./knexfile'));
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
