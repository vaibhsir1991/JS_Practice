/**
 * Write a recusrive function to display a fibonacci series
 *
 * E.g. Input = 1
 *      output = 1
 *
 *      Input = 9
 *      output = 34
 *
 * Formula: F(n) = F(n-1) + F(n-2)
 */
const showTime = () => {
  var today = new Date();
  var time =
    today.getHours() +
    ':' +
    today.getMinutes() +
    ':' +
    today.getSeconds() +
    ':' +
    today.getMilliseconds();
  return time;
};

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(20));
// console.log(fibonacci(9));
// console.log(fibonacci(1));

//Dynamic Programming
const fibonacciDynamic = (n) => {
  let f = new Array(n + 2);
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    console.log(f[i]);
  }

  return f[n];
};

console.log(fibonacciDynamic(4));
