// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //handle the exception possibilities
    if(!alphabet) return false;

    if(alphabet.length !== 26) return false;

    let alphabetList = [];
    for (let i =0; i<alphabet.length; i++){
      let letter = alphabet[i];
      if(!(alphabetList.includes(letter))) alphabetList.push(letter);
    }

    if(alphabetList.length !== alphabet.length) return false;

    //create real alphabet list.
    let trueAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let toUseAlphabet = alphabet.split('');
    input = input.toLowerCase();
    let inputList = input.split('');
    //create a function to encode;
    function toencode(){
      let codedLetter = inputList.map((letter)=>{
        return (letter === ' ') ? ' ' : toUseAlphabet[trueAlphabet.indexOf(letter)];
      });
      return codedLetter.join('');
    }

    //create function to decode
    function todecode(){
      let decodedLetter = inputList.map((character)=>{
        return (character === ' ') ? ' ' : trueAlphabet[toUseAlphabet.indexOf(character)];
      });
      return decodedLetter.join('');
    }

    return encode ? toencode() : todecode();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
