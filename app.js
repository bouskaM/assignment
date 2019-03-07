const express = require('express');
const app = express();
const fs = require('fs');
const unsatShops = require('./unsatShops');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
    res.render('draw');
});

app.get('/draw', function (req, res) {
    res.render('draw');
});

app.get('/data', function (req, res) {
    res.render("data");
    res.json(unsatShops.shopsProfit);
});
app.get('/data/profits', function (req, res) {
  
    res.json(unsatShops.shopsProfit);
});


app.listen(3000);

console.log(unsatShops.shopsProfit);