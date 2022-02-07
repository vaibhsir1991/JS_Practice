//Find the max sum of 4 consecutive numbers in an Array

var input = [2, 6, 9, 112, 1, 10, 15, 100, 20];

const maxSum = (arr, number) => {
  if (!number || arr.length < number) return;

  var maxSum = 0;
  var sum = 0;

  for (var i = 0; i <= arr.length - number; i++) {
    sum = 0;
    for (var j = i; j < i + number; j++) {
      var sum = sum + arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  console.log(maxSum);
};

maxSum(input, 3); // Complexity O(N * num)

// Sliding Window Technique (SWT)
const SWT = (arr, num) => {
  let maxSum = 0; //to keep track of maximum sum.
  let sumOfWindow = 0; //to keep track of sum of the window.
  let windowSize = 0;

  for (let i = 0; i < arr.length + 1; i++) {
    if (windowSize == num) {
      console.log('current windows sum is');
      console.log(sumOfWindow);
      //storing the maximum sum
      maxSum = Math.max(maxSum, sumOfWindow);
      //deleting the end element of the window
      sumOfWindow = sumOfWindow - arr[i - 3];
      windowSize--;
    }

    //adding elements to the window.
    sumOfWindow = sumOfWindow + arr[i];
    windowSize++;
  }

  console.log('The maximum sum is: ' + maxSum);
};

SWT(input, 3); // Complexity O(N)
