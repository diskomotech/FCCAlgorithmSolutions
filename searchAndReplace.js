function myReplace(str, before, after) {

  const firstLetter = before.charAt(0);
  
  if (firstLetter === firstLetter.toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 
  else  {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");