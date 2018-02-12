var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [
    {name: "Sasha Millford", product: "Purse", profit: "15"}, 
    {name: "James Millford", product: "Hat", profit: "7"}, 
    {name: "Ryan Monaghan", product: "Hooded Towel", profit: "25"},
    {name: "Ryan Monaghan", product: "Hooded Towel", profit: "25"},
    {name: "Ryan Monaghan", product: "Jacket", profit: "35"}
  ];
  var c = 0;
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].profit)
    c += parseInt(data[x].profit);
    console.log(c);
  }
  res.render('index', { date: new Date().getFullYear().toString(), dataX: data, totalProfit: c });
  console.log(data);
});

module.exports = router;
