function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else if (isNaN(x)) {
    return 'NaN'; // Explicitly handle NaN
  } else {
    return 1; 
  }
}

console.log(foo(null)); // expected 0
console.log(foo(-1)); // expected -1
console.log(foo(1)); // expected 1
console.log(foo(NaN)); // expected 'NaN' 