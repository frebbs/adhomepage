const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT

const rootRouter = require('./router/rootRouter');

app.use([
    express.urlencoded({extended: true}),
    express.json(),
    express.static('public')
]);

app.set('view engine', 'ejs');

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log('Server running');
});