// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  
    let finalArr = [];
    let splat = str.split('');
    
    for (let i = 0; i < str.length; i += 1) {
      let tempArr = [];
      if (splat[i] === "G") {
        tempArr.push(splat[i], "C");
        finalArr.push(tempArr);
      } else if (splat[i] === "C") {
        tempArr.push(splat[i], "G");
        finalArr.push(tempArr);
      } else if (splat[i] === "A") {
        tempArr.push(splat[i], "T");
        finalArr.push(tempArr);
      } else { 
        tempArr.push(splat[i], "A");
        finalArr.push(tempArr);
      }
    }
    return finalArr;
  }
  
  pairElement("GCG");