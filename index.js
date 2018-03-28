const yahooStocks = require('yahoo-stocks');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auto-trade');

const stockSchema = mongoose.Schema({
    time: Number,
    close: Number,
    open: Number,
    high: Number,
    low: Number,
    volume: Number
});

let StockData = mongoose.model('StockData', stockSchema);

yahooStocks.history('BTC-USD', {
    interval: '1m'
}).then(res => {
    console.log(res.records.length);
    console.log(res.records[0]);
    console.log(res.records[1]);

    res.records.forEach(item => {
        let stockData = new StockData(item);

        stockData.save()
    });

    

    stockData1.save((err, item) => {
        if (err) {
            return console.log(err);
        }
    })

    stockData2.save((err, item) => {
        if (err) {
            return console.log(err);
        }
    })
});

