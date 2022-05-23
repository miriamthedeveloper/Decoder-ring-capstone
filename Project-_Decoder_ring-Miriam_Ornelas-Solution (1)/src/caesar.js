// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25 ){
      return false;
    }
    if (encode === false) shift = shift - (shift * 2);
    let alpha = "abcdefghijklmnopqrstuvwxyz";
   let result ="";
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++){
      let character = input.charAt(i)
      if(alpha.indexOf(character) !== -1){
     
      let charecterCode = input.charCodeAt(i)
      let newCharecter = String.fromCharCode(charecterCode + shift) 
      if(alpha.indexOf(newCharecter) === -1){
        if(shift < 0){
          newCharecter = String.fromCharCode(charecterCode + shift + 26)
        } else{
        newCharecter = String.fromCharCode(charecterCode + shift - 26)
      }
      }
      result += newCharecter  
      } else{
        result += character
      }
    }
   console.log(result) 
    return result
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
