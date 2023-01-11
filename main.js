(function() {
    "use strict";

// console.log(items[1].price); // This returns the second items price.


// Try using reduce to get the average. Reduce pulls the first value from the array when it is not specified. 




// Can refactor to: 

// Must go in this order .filter and then .map. This is because you lose the objects information with the .map filter. 

const prices = items.filter(function(item){ 

    return item.currency_code === "USD"

}).map(function(item) { //Change from array of objects to an array of prices
    return item.price;
});


const sum = prices.reduce(function(acc, i) { //If you do not give reduce a default value, it grabs the first array element
    return acc + i;
}, 0); // Adding a ,0 drops in a default value for the very first iteration of acc.

const averagePriceUSD = sum / prices.length;

console.log("The average price is $" + averagePriceUSD);


/*

function averagePrices(items, currency = 'USD') {
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
 

*/

//Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.


const priceFilteredArray = items.filter(function(it){

    return it.price >= 14 && it.price <= 18 && it.currency_code === 'USD';

});

console.log(priceFilteredArray); //The console does not like when you concatenate this.


// 3. Show me how find the item with a "GBP" currency code and print its name and price.
// GBP price should be 19 dollars.

const currencyFilteredArray = items.filter(function(arr){
    return arr.currency_code === 'GBP';
});

// use .forEach to print out to the console for each item in the list.

console.log(currencyFilteredArray[0].title + " costs £" + currencyFilteredArray[0].price);



// 4. Show me list of items that are made out of wood. 

// The filter function needs to return items that have a item[i].materials array that contains the word WOOD.
// A double filter? A match or contains call? 


const materialFilteredArray = items.filter(function(arr){
    return arr.materials.includes('wood'); //This returns true or false. If true, it keeps it in the filtered list. 
}).map(function (item){
    return item.title;
});


materialFilteredArray.forEach(function (title) {
    console.log(`${title}\n`);
});

/*
// Not sure if this is best practice. 
for (let i = 0; i < materialFilteredArray.length; i++){
    console.log(materialFilteredArray[i].title + " is made of wood");
}
*/

// 5. Show me how to find which items are made of eight or more materials.
/*
    
const eightMaterialFilteredArray = items.filter(function(arr){
    return arr.materials.length >= 8; //This returns true or false. If true, it keeps it in the filtered list. 
});


// For each array returned, print the console log statement X contains X materials.
for (let i = 0; i < eightMaterialFilteredArray.length; i++){
    console.log(eightMaterialFilteredArray[i].title + " contains " + eightMaterialFilteredArray[i].materials.length + " materials:");

    // For each material listed in the array, console log the material.
    for (let j = 0; j < eightMaterialFilteredArray[i]["materials"].length; j++) {
        console.log(eightMaterialFilteredArray[i]["materials"][j]);
    }

}


*/


items.filter(function(arr){
    return arr.materials.length >= 8; //This returns true or false. If true, it keeps it in the filtered list. 
}).forEach(function (item){ // This for each function means you no longer need to call the const variable description.
    console.log(`${item.title}\n`);

    item.materials.forEach(function (material) {
        console.log(`${material}\n`);
    })
});

















// 6. Show me how to calculate how many items were made by their sellers.

// "who_made": "someone_else", "who_made": "i_did",

const selfMadeArray = items.filter(function(arr){
    return arr.who_made === "i_did"; //This returns true or false. If true, it keeps it in the filtered list. 
});

console.log(selfMadeArray.length + " were made by their sellers.");
// Can also be written using string interpolation.
// console.log(`${selfMadeArray.length} were made by their sellers`);






}());