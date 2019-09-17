/*

function maxStockProfit(pricesArr){
    // Takes in an array of prcies for a stock
    // as a parameter and results hte max possible
    // profit of the day (we could have made)

    // What is the best price to sell & best price to buy
}

Example: [ 40, 38, 36, 12, 15, 8, 10, 30, 60, 160]
Maximum profit we could have made is $152.
Since 8 is best price we could buy and 160 is best price to sell

Notes: If no profit is possible for that day, return -1.  
A max profit of 0 is treated as any other max profit value
O(n) -linear- is the one we are aiming for

*/

function maxStockProfit(pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      // What would our profit be?
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      // We do not want to buy at higher price.
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}
