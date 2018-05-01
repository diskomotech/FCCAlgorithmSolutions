// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const start = alphabet.indexOf(str[0]);
    const end = alphabet.indexOf(str[str.length - 1]);
    let compare = alphabet.slice(start, end).split('');
    let splitStr = str.split('');
    
    if (str.length > 25) {
      return undefined;
    }
  
     let result = compare.filter(function(i) {
       return !splitStr.includes(i);
     });
  
    return result.join('');
  }
  
  fearNotLetter("abce");