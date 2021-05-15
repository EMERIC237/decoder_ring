// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    function encodeordecode(shift){
    //handle the wrong shift value;
    if(shift < -25 || shift === 0 || shift > 25) return false;

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let inputList = input.split('');
    let codedInput = inputList.map((letter)=> {
      //hold tle lowercase of the letter in a variable
      letter = letter.toLowerCase();
      // check if the character is a letter or a special character
      if (alphabet.includes(letter)){
        //identify the index of the letter inside the alphabet
        let indexInAlphabet = alphabet.indexOf(letter);
        //shift the letter to the next one after "shift"letters
        if (shift > 0){
          let finalLetter = indexInAlphabet + shift <= 25 ? alphabet[indexInAlphabet+shift] : alphabet[(indexInAlphabet+shift)-25-1];
        return finalLetter;
        }else{
          let finalLetter = indexInAlphabet + shift >= 0 ? alphabet[indexInAlphabet+shift] : alphabet[25+(indexInAlphabet+shift)+1];
        return finalLetter;
        }
      }else{
        return letter;
      }
        
    });
    return codedInput.join('');
    }
    return encode ? encodeordecode(shift) : encodeordecode(shift * -1);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
