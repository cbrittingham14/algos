// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

const caesarCipher = function(str, offset) {

  // make offset a distance to shift in
  // the closed loop of the alphabet
  offset = offset % 26; 

  //assign alphabet and convert string to array to use map method
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const strArray = str.split('');

  const caesar = strArray.map( l => {

    //can't shift a space, return it as is
    if (l === ' '){
      return l;
    }

    let lc = l.toLowerCase(); // make letter lowercase for comparison
    let shiftedIndex = alpha.indexOf(lc) + offset; // get index of shifted letter
    console.log('alpha' ,alpha.indexOf(lc));

    // set bool in order to return a shifted letter
    // in the same case as it was received
    let isUpperCase = false;
    if (l === l.toUpperCase()){
      isUpperCase = true;
    }
    // check if shift is outside alphabet index and adjust accordingly
    if (shiftedIndex > 25) {
      let index = shiftedIndex - 26;
      return (isUpperCase ? alpha[index].toUpperCase() : alpha[index]);
    } else if (shiftedIndex < 0){
      let index = shiftedIndex + 26;
      return (isUpperCase ? alpha[index].toUpperCase() : alpha[index]);
    } else {
      return (isUpperCase ? alpha[shiftedIndex].toUpperCase() : alpha[shiftedIndex]);
    }
  });
  return caesar.join('');
};
