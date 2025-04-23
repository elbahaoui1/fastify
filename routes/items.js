    const items = require('../items')
    const {getItem, getItems} = require('../controllers/items')


    const Item = {
        type: 'object',
        properties: {
            id: { type: 'string' },
            name: { type: 'string' }
        }
    } 
    const getItemsOpts = {
        schema: {
            description: 'Get all items',
            tags: ['items'],
            response: {
                200: {
                    type: 'array',
                    items: Item,
                    description: 'Successful response'
                }
            }
        },
        handler: getItems
    }

    const getItemOpts = {
        schema: {
            description: 'Get a single item by ID',
            tags: ['items'],
            params: {
                type: 'object',
                properties: {
                    id: {
