let express = require('./src/express')
const app = express()

app.get('/', (req, res) => {
    res.writeHead(200)
    res.write('Express App Online');
    res.end();
});