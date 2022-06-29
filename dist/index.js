
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./player_test.cjs.production.min.js')
} else {
  module.exports = require('./player_test.cjs.development.js')
}
