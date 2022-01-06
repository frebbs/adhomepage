const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT

const rootRouter = require('./router/rootRouter');

app.use([
    express.urlencoded({extended: true}),
    express.json()
]);

app.set('view engine', 'ejs');

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log('Server running');
});