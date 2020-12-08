  
let express = require('./src/express')
const app = express()


app.get('/', (req, res,next) => {
    console.log("foo", next)
    next()

}, (req, res, next) => {
    console.log("bar")
    next()
});

app.get('/', (req, res) => {
    res.json({hello: 'world'})
});

app.post('/post',(req,res) => {
    res.writeHead(200)