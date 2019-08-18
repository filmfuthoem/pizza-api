async function updateOrder(id, update) {
    if(!id || !update) 
        throw new Error('Order ID or update object are required for updating the order')

    return {
        message: `Order ${id} was successfully updated`
    }
}