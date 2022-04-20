const express = require('express');
const path = require('path');
const { convert, toMoney } = require('./lib/converter');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/convert', (req, res) => {
    const { dolarQuote, dolarQuant } = req.query;
    const conversion = convert(parseFloat(dolarQuote), dolarQuant);
    res.render('conversion', {
        dolarQuote,
        dolarQuant,
        conversion: toMoney(conversion)
    });
});

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("running on port 3000");
});