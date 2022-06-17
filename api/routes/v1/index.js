const app = require('../../app')
const checkoutRoute = require('./chekout-route')

module.exports = app => {
    app.use('/api/v1/mapache', checkoutRoute)
}