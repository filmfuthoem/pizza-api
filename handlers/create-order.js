async function createOrder(order) {

    // if the order object doesn't contain a pizzaId or a customer address , throw an error
    if(!order || !order.pizzaId || !order.address) 
        throw new Error('To order pizza please provide pizza type and address where pizza shoud be delivered')

    // return empty object
    return {}
}   

module.exports = createOrder