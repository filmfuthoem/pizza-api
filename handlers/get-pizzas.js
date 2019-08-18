const pizzas = require('../data/pizzas.json')

async function getPizzas(PizzaId) {
    
    // if a pizza ID is not passed,
    // return the full pizza list.
    if(!PizzaId) return pizzas

    // using == instead of === 
    // because PizzaId is passed as a string and
    // you don't want it to be a strict match as
    // in database it may be an integer
    const pizza = pizzas.find((pizza) => {
        return pizza.id == PizzaId
    })
    
    if(pizza) return pizza

    // throw an error if the application doesn't find the selected pizza
    throw new Error('The pizza you requested was not found')
}

// export the getPizzas handler
module.exports = getPizzas