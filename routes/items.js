    let items = require('../items')
    const {getItem, getItems, addItem, deleteItem, updateItem} = require('../controllers/items')


    const Item = {
        type: 'object',
        properties: {
            // id: {type: 'string'},
            name: {type: 'string'}
        }
    } 

    const postItemOpts ={ 
        schema: {
            body: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {type: 'string'}
                }
            },

            response:{
                201: Item
            }
        },
        handler: addItem,
    }

    const getItemsOpts = {
        schema: {
            response: {
                200:{ 
                    type: 'array',
                    items: Item
                }
            }
        },
        handler: getItems
    }

    const deleteItemOpts = {
        schema: {
            response:{
                200:{
                    type: 'object',
                    properties: {
                        message: {type: 'string'}
                    }
                }
            }
        },
        handler: deleteItem,
    }

    const updateItemOpts = {
        schema: {
            response: {
                200: Item
            }
        },
        handler: updateItem,
    }

    const getItemOpts = {
        schema:{
            response: {
                200: Item
            }
        },
        handler: getItem
    }

    function itemsRoutes (fastify, options, done) {
        fastify.get('/items',getItemsOpts )
        
        fastify.get('/items/:id', getItemOpts)

        fastify.post('/item', postItemOpts)

        fastify.delete('/item/:id', deleteItemOpts)

        fastify.put('/item/:id', updateItemOpts)

        done()
    }

    module.exports = itemsRoutes