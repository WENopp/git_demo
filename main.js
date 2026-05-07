function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(greet('World'));
console.log('2 + 3 =', add(2, 3));
console.log('fibonacci(10) =', fibonacci(10));
