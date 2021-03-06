// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
  const str = num.toString();
  const len = str.length;
  let sum = 0;
  for(i = 0; i<len; i++) {
    sum += str[i]**len;
  };
  return(sum === num ? true : false);
};
