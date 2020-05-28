// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

const caesarCipher = function(str, offset) {

  // make offset a distance to shift in
  // the closed loop of the alphabet
  offset = offset % 26; 

  // convert the alphabet and given string to arrays
  // for easier manipulation
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphArray = alpha.split('');
  const strArray = str.split('');

  const caesar = strArray.map( l => {

    //can't shift a space, return it as is
    if (l === ' '){
      return l;
    }

    let lc = l.toLowerCase(); // make letter lowercase for comparison
    let shiftedIndex = alphArray.indexOf(lc) + offset; // get index of shifted letter

    
    // set bool in order to return a shifted letter
    // in the same case as it was received
    let isUpperCase = false;
    if (l === l.toUpperCase()){
      isUpperCase = true;
    }
    // check if shift is outside alphabet index and adjust accordingly
    if (shiftedIndex > 25) {
      let index = shiftedIndex - 26;
      return (isUpperCase ? alphArray[index].toUpperCase() : alphArray[index]);
    } else if (shiftedIndex < 0){
      let index = shiftedIndex + 26;
      return (isUpperCase ? alphArray[index].toUpperCase() : alphArray[index]);
    } else {
      return (isUpperCase ? alphArray[shiftedIndex].toUpperCase() : alphArray[shiftedIndex]);
    }
  });
  
  return caesar.join('');
};
