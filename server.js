const express = require('express')
const next = require('next')

const dev = process.env.NODE_DEV !== 'production'
const port = process.env.NODE_PORT ? process.env.NODE_PORT : 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (res, req) => {
            return handle(res, req)
        })

        server.listen(port, (err) => {
            if (err) {
                throw err
            }
            console.log(`App is running on port: ${port}`)
        })
    })
    .catch(ex => {
        console.log('App err')
    })