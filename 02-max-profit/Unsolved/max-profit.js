// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
  let profit = 0;
  let j = 0;

  while (j < prices.length) {
    for (i = j; i< prices.length; i++){
      let dif = prices[i] - prices[j]
      if(dif > profit){
        profit = dif;
      }
    };
    console.log(profit);
    j++
  };
  return profit;
};
