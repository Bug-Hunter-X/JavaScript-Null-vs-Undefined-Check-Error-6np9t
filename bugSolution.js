function foo(x) {
  // Using strict equality (===)
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return 0;
  } else {
    return x.length;
  }
}

// Or using the nullish coalescing operator (??)
function bar(x) {
  return (x ?? []).length; 
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo([1, 2, 3])); // 3

console.log(bar(null)); //0
console.log(bar(undefined)); //0
console.log(bar([1,2,3])); //3