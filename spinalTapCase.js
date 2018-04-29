function spinalCase(str) {

  const punctuation = /\s+|_/g;
  const noSpaces = /([a-z])([A-Z])/g;
  
  return str.replace(noSpaces, "$1 $2").replace(punctuation, "-").toLowerCase();
}

spinalCase("thisIsSpinalTap");