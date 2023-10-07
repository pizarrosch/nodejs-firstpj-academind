// const http = require('http'); //Needed only if app.listen is not used
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use(shopRouter);

// const server = http.createServer(app);
// server.listen(3000);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
})

//The shorter version of two lines above
app.listen(3000);