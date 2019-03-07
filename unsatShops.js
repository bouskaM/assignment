var parsedJSON;
var shopsProfit = [];
const testFolder = './data/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
    parsedJSON = require('./data/' + file);
    parsedJSON.forEach(function (el) {
        addProfit(el.franchiseName, el.franchiseId, (el.income - (el.wageCosts + el.ingredientsCosts + el.otherCosts)), shopsProfit);
    })
});

//console.log(shopsProfit);


function addProfit(name, id, profit, obj) {
    var position = -1;
    obj.forEach(function (el, i) {
        if (el.id === id) {
            position = i;
        }
    });
    if (position != -1) {
        obj[position].profit += profit;
    } else {
        obj.push({
            name: name,
            id: id,
            profit: profit
        });
    }
}

module.exports.shopsProfit = shopsProfit;