// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let swap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
    let regEx = /[&<>"']/gi;
    let matched = str.match(regEx);
    
    if (str.search(regEx) === -1) {
      return str;
    } else { 
      for (let i = 0; i < matched.length; i++) {
      str = str.replace(matched[i], swap[matched[i]]);
      }
      return str;
    }
  }
  
  convertHTML("Dolce & Gabbana");