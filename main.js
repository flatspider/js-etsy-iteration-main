(function() {
    "use strict";

// console.log(items[1].price); // This returns the second items price.

function averagePrices(items,currency = 'USD') {
    // Default averages US dollar prices.

    let priceSum = 0;
    let includedItems = 0;

    for(let i = 0; i < items.length; i++) {
        //Iterate through all items in array

        if (items[i].currency_code === currency){
           priceSum += items[i].price;
           includedItems = includedItems + 1;
        }
    }
    return Math.round((priceSum / includedItems) * 100) / 100;
    // Rounds the cash price using the integer round function
}

console.log("The average price is $" + averagePrices(items));
//First response. Should equal $23.86
//GBP price should be 19 dollars. 














//Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.


var priceFilteredArray = items.filter(function(it){


    return it.price >= 14 && it.price <= 18;


});

console.log(priceFilteredArray); //The console does not like when you concatenate this.








    


}());