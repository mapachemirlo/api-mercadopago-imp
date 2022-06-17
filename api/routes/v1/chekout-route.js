const express = require('express')
const checkoutController = require('../../controllers/v1/checkout-controller')
const cors = require('cors')
const app = express()

const route = express.Router()
app.use(cors())

var whilelist = ['https://example-site.app']
var corsOptions = {
    origin: function(origin, callback) {
        if (whilelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS baby!'))
        }
    }
}

route.post('/checkout', cors(corsOptions), checkoutController.checkoutMercadopago)



module.exports = route