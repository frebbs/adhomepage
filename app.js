const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT

if(process.env.DEVLOPMENT === 'true') {
    console.log('Running with dev settings')
    const livereload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });

    app.use(connectLiveReload());
}



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