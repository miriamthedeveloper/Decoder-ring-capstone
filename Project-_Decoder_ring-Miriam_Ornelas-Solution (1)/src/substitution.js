// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

//create variable for standard and substitution alphabet below
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  let codedMessage = [];

  function substitution(input, alphabet, encode = true) {
    
/*Checking if alphabet is 26 charecters long and if there is an alphabet. Also, checking that the charecters in the alphabet parameter are unique*/
    if (!alphabet || alphabet.length !== 26) return false;
 let checkForRepeats = new Set(alphabet);
    if ([...checkForRepeats].length !== 26) return false;
//seperate charecters in sub alphabet string
alphabet.split('');
//codeing and decoding
  if (encode){
    for (let i = 0; i < 25; i++){
      codedMessage[standardAlphabet[i]] = alphabet[i];
    }
    } else {
      for (let i = 0; i < 25; i++) {
        codedMessage[alphabet[i]] =  standardAlphabet[i]
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return codedMessage[letter]
    })
    return answer.join('')
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
