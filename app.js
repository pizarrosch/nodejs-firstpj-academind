// const http = require('http'); //Needed only if app.listen is not used
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

// const server = http.createServer(app);
// server.listen(3000);

//The shorter version of two lines above
app.listen(3000);