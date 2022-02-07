// To print all the subsets from the given set

let input = ['a', 'b', 'c', 'c'];

// O(n2^n)
const PowerSet = (inputSet) => {
  const inputSet_size = inputSet.length;
  const power_set_size = parseInt(Math.pow(2, inputSet_size));
  let counter, i;
  let result = [];

  for (counter = 0; counter < power_set_size; counter++) {
    var newSet = '';
    for (i = 0; i < inputSet_size; i++) {
      if ((counter & (1 << i)) > 0) newSet += inputSet[i];
    }
    result.push(newSet);
  }

  console.log(result);
};

PowerSet([1, 1, -1]);
// Output
[
  '',
  'a',
  'b',
  'ab',
  'c',
  'ac',
  'bc',
  'abc',
  'c',
  'ac',
  'bc',
  'abc',
  'cc',
  'acc',
  'bcc',
  'abcc',
];

//PowerSet('vaibhav');

// Rescursive for array
const PowerSetRecursive = (str, index, currentSubset) => {
  let n = str.length;

  // base case
  if (index == n) {
    console.log(currentSubset);
    return;
  }
  PowerSetRecursive(str, index + 1, [...currentSubset, ...str[index]]);
  PowerSetRecursive(str, index + 1, currentSubset);
};

PowerSetRecursive(['a', 'n', 'j', 'u'], 0, []);

// Rescursive for string
const PowerSetRecursiveString = (str, index, currentSubset) => {
  let n = str.length;

  // base case
  if (index == n) {
    console.log(currentSubset);
    return;
  }
  PowerSetRecursiveString(str, index + 1, currentSubset + str[index]);
  PowerSetRecursiveString(str, index + 1, currentSubset);
};

PowerSetRecursiveString('anju', 0, '');
