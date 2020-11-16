let express = require('./src/express')
const app = express()

app.get('/', (req, res) => {
    res.writeHead(200)
    res.write('Hello express app from /');
    res.end();
});

app.get('/2', (req, res) => {
    res.writeHead(200)
    res.write('Hello express app from /2');
    res.end();
});

app.post('/post',(req,res) => {
    res.writeHead(200)
    res.write('Post data :)');
    res.end();
})

app.listen(3000, () => console.log('Port 3000 open and listening'))