/**
 * Find 1st recurring characted in given string
 */

const input = 'DBCABAD';

// Solution 1 --> O(n^2)

const firstRecurringCharacterLame = (str) => {
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return str[i];
      }
    }
  }

  return null;
};

console.log(
  'firstRecurringCharacterLame: ',
  firstRecurringCharacterLame(input)
);

//Solution 2 --> O(n)
const firstRecurringCharacterSmart = (str) => {
  const count = new Map();

  for (i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      return str[i];
    } else {
      count.set(str[i], 1);
    }
  }

  return null;
};

console.log(
  'firstRecurringCharacterLame: ',
  firstRecurringCharacterSmart(input)
);
