// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.

function translatePigLatin(str) {
  
	const vowelCheck = /[aeiou]/i;
  
  if (vowelCheck.test(str.charAt(0))) {
    return str + 'way';
  } 
  else if (str.search(vowelCheck) === -1) {
    return str + 'ay';
  }
  else {
      let splitter = str.search(vowelCheck);
      let firstConsonant = str.slice(0, splitter);
    
      return str.slice(splitter) + firstConsonant + 'ay';

  }
}