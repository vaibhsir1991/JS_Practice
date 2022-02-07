//[<2,4>,<4,55>,<4,5>]

[
  [2, 4],
  [4, 5],
  [4, 5],
  [3, 4],
];

// counter 1  - 2 - 5
// counter 2 - 4 - 5
// counter 3 - 4 - 5

const getAllNumbersInRange = (ranges, number = '') => {
  for (i = ranges[0][0]; i <= ranges[0][1]; i++) {
    var numberFromPrevious = number + i;
    if (ranges.length == 1) {
      console.log(numberFromPrevious);
    } else {
      getAllNumbersInRange([...ranges.slice(1)], numberFromPrevious);
    }
  }
};

getAllNumbersInRange([
  [2, 6],
  [4, 6],
  [4, 6],
  [3, 4],
]);
