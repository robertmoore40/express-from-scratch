let express = require('./src/express')
const app = express()

app.get('/', (req, res,next) => {
    console.log(next)
    next()
});

app.get('/', (req, res) => {
    res.writeHead(200)