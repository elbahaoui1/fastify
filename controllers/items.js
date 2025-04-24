let items = require('../items')
const { v4:uuidv4 } = require('uuid')
const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply) => {
    const { id } = req.params
    const item = items.find((item) => item.id === Number(id))
    reply.send(item)
}

const addItem = (req, reply) => {
    const {name} = req.body
    const Item = {
        id: uuidv4(),
        name,
    }
    reply.send(Item)
}

const deleteItem = (req, reply) => {
    const {id} = req.params
    items = items.filter((item) => item.id !== id)
    reply.send({message: `item ${id} has been removed successfuly`})
}

const updateItem = (req, reply) => {
    const { id } = req.params
    const {name} = req.body

    items = items.map((item) => item.id === id ? {id, name} : item)
    item = items.find((item) => item.id === id)

    reply.send(item)
}

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem,
    updateItem,
}