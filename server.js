const fastify = require('fastify')({ logger: true })
const items = require('./items')
const PORT = 5000

// Register Swagger
fastify.register(require('@fastify/swagger'), {
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
        },
        host: 'localhost:5000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    }
})

// Register Swagger UI
fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    exposeRoute: true
})

// Register routes
fastify.register(require('./routes/items'))

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' })
        console.log(`Server listening on http://0.0.0.0:${PORT}`)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()
