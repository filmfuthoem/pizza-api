'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

// import getPizzas handler from handler directory
const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const editOrder = request('./handlers/update-order')
const deleteOrder = request('./handlers/delete-order')
// Defind routes user-friendly
api.get('/', () => 'Welcome to Pizza API')

api.get('/pizzas', async () => {
    return await getPizzas()
})

// add the route for finding one pizzaby its ID
api.get('/pizzas/{id}', async (request) => {
    return await getPizzas(request.pathParams.id)
}, {
    error: 404  // customize success and error status codes
})

api.post('/orders', async (request) => {
    return await createOrder(request.body)
},{
    success: 201,
    error: 400
})

api.put('/orders/{id}', async (request) => {
    return await editOrder(request.body)
},{
    error: 400
})

api.delete('/orders/{id}', async (request) => {
    return await deleteOrder(request.pathParams.id);
},{
    error: 400
})

module.exports = api