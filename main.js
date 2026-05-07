function greet(name) {
  return `Hello, ${name}!`;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(greet('World'));
console.log('4 * 5 =', multiply(4, 5));
console.log('10 - 3 =', subtract(10, 3));
console.log('fibonacci(10) =', fibonacci(10));
