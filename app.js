// const http = require('http'); //Needed only if app.listen is not used
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter.router);
app.use(shopRouter);

// const server = http.createServer(app);
// server.listen(3000);

app.use((req, res, next) => {
  res.status(404).render('error', {pageTitle: '404 Page Not Found'});
})

//The shorter version of two lines above
app.listen(3000);