function sumFibs(num) {
  let prev = 1;
  let current = 1;
  let counter = 1;
  if (num === 1) {
    return 1;
  }
  while (current <= num) {
    if (current % 2 === 1) {
      counter += current;
    }
    current += prev;
    prev = current - prev;
    
  }
  return counter;
}
sumFibs(4);