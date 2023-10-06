// const http = require('http'); //Needed only if app.listen is not used
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('In product middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product', (req, res) => {
  console.log(req.body)
  res.redirect('/');
})

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

//The shorter version of two lines above
app.listen(3000);