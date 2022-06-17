'use strict'

const mercadopago = require('mercadopago')

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
})


const checkoutMercadopago = async(req, res) => {
    let preference = {
        items: [{
            title: req.body.title,
            unit_price: parseInt(req.body.price),
            currency_id: 'ARS',
            quantity: 1,
        }],

        back_urls: {
            "success": "https://examplesite.app/success.html",
            "failure": "https://examplesite.app/failure.html",
            "pending": "https://examplesite.app/pending.html"
        },
        "auto_return": "approved",
    };

    await mercadopago.preferences.create(preference)
        .then(function(response) {

            // The PRODUCTION URL (init_point) must be entered, otherwise we will get an error.
            console.log(`* El ID de la orden es: ${response.body.id}`)
            console.log(`* El ID del comprador es: ${response.body.client_id}`)

            res.redirect(response.body.init_point);

        }).catch(function(error) {
            console.log(error);
        });
}


module.exports = {
    checkoutMercadopago
}