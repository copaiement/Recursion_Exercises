// Fibonnaci sequence code
// the fib sequence sums each number with the one before it to get the next number

function fibs(number) {
  // takes a number and return array containing that many
  // numbers from the fib sequence

  // initialize the fib sequence with the first two entries
  let fibArray = [0, 1];

  // if input is <=1 return [0]
  if (number <= 1) return [0];

  for (let i = 2; i <= (number - 1); i++) {
    // number = 1 is fibArray[0]
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }

  return fibArray;
}

function fibsRec(number, fib = [0, 1]) {
  // does the same thing but with recursion
  // initialize
  if (number <= 1) return [0];
  if (number <= 2) return fib;
  fib = fibsRec(number - 1);
  fib.push(fib[number - 3] + fib[number - 2]);

  return fib;
}

let fibsTest = fibs(10);
let fibsRecTest = fibsRec(10);

console.log(fibsTest);
console.log(fibsRecTest);
