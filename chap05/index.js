  
let express = require('./src/express')
const app = express()


app.get('/', (req, res,next) => {
    console.log("foo", next)
    next()