// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function(num) {

  let str = ''; // string to return

  // object to associate numbers and their roman numeral representation
  // largest first so it can be subtracted
  const roman = { M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L:
     50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};

  for (key in roman) {
    // count will be the number of times each roman numeral key will appear
    // in our string for the given num
    var count = Math.floor(num / roman[key]);

    //add the approprate number of numerals (could be 0)
    for (i = 0; i < count; i++){
      str += key;
    };

    // update the num by subtracting the decimal value of the roman numeral
    // part added to the return value
    num -= count * roman[key];  
  }

  return str;
  
};
