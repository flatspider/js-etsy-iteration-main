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
 



//Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.


var priceFilteredArray = items.filter(function(it){

    return it.price >= 14 && it.price <= 18;

});

console.log(priceFilteredArray); //The console does not like when you concatenate this.


// 3. Show me how find the item with a "GBP" currency code and print its name and price.
//GBP price should be 19 dollars.

var currencyFilteredArray = items.filter(function(arr){
    return arr.currency_code === 'GBP';
});

console.log(currencyFilteredArray[0].title + " costs £" + currencyFilteredArray[0].price);



// 4. Show me list of items that are made out of wood. 

// The filter function needs to return items that have a item[i].materials array that contains the word WOOD.
// A double filter? A match or contains call? 


var materialFilteredArray = items.filter(function(arr){
    return arr.materials.includes('wood'); //This returns true or false. If true, it keeps it in the filtered list. 
});

// Not sure if this is best practice. 
for (let i = 0; i < materialFilteredArray.length; i++){
    console.log(materialFilteredArray[i].title + " is made of wood");
}






    


}());