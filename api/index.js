const express = require('express')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config()

const routesV1 = require('./routes/v1')
routesV1(app)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`==> Server API-MercadoPago running on port ${PORT}`)
})