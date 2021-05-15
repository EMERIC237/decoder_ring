// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    //Create a list of lists to represent all my letters

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const lists = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i/j", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    //Create an object to store my codes with their corresponding letter
    //codeByLetter gives me the code knowing the letter
    let codeByLetter = {};
    codeByLetter[" "] = " ";
    //create an object to store my letters with their corresponding codes
    //letterByCode gives me the letter knowing the code
    let letterByCode = {};
    letterByCode[" "] = " ";

    lists.forEach((list) => {
      list.forEach((letter) => {
        let listIndex = lists.indexOf(list) + 1;
        let letterIndex = list.indexOf(letter) + 1;
        let code = `${letterIndex}${listIndex}`;
        codeByLetter[`${letter}`] = code;
        letterByCode[`${code}`] = letter;
      });
    });
    // manage the i and j case statement.
    delete codeByLetter["i/j"];
    codeByLetter["i"] = "42";
    codeByLetter["j"] = "42";
    //manage i/j case.
    delete letterByCode["42"];
    letterByCode["42"] = "(i/j)";

    input = input.toLowerCase();
    let inputList = input.split("");
    //function to code.
    function toencode() {
      let codeOutput = inputList.map((letter) => codeByLetter[`${letter}`]);
      return codeOutput.join("");
    }

    //function to decode.
    function todecode() {
      //check if the length on the number is even or odd
      let newInput = [];
      for (let i = 0; i < input.length; i++) {
        if (!(input[i] === " ")) {
          newInput.push(input[i]);
        }
      }
      let numWithoutSpace = newInput.join("");

      if (numWithoutSpace.length % 2 !== 0) return false;
      //function...
      let codeNumbers = [];
      for (let i = 0; i < input.length; i++) {
        let number = input.substring(i, i + 2);
        if (!number.startsWith(" ")) codeNumbers.push(number);
        if (number.endsWith(" ")) codeNumbers.splice(i, 0, " ", " ");
      }
      let finalNumbers = [];
      console.log(codeNumbers);
      for (let i = 0; i < codeNumbers.length; i += 2) {
        finalNumbers.push(codeNumbers[i]);
      }
      console.log(finalNumbers);

      //convert the codes
      let letterOutput = finalNumbers.map(
        (number) => letterByCode[`${number}`]
      );
      console.log(letterOutput);
      return letterOutput.join("");
    }

    return encode ? toencode() : todecode();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
