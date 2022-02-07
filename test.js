function SortGivenArray(arr) {
  if (!arr.length) return arr;
  let indexCounter = 0;
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      resultArray.unshift(arr[i]);
      indexCounter++;
    } else if (arr[i] === 2) {
      resultArray.push(arr[i]);
    } else {
      resultArray.splice(indexCounter, 0, arr[i]);
    }

    // if (arr[i] === 0) {
    //   if (i !== counter0 && arr[counter0] !== 0) {
    //     let temp = arr[counter0];
    //     arr[counter0] = arr[i];
    //     arr[i] = temp;
    //   }
    //   counter0++;
    // }
    // if (arr[i] === 2) {
    //   while (arr[counter2] === 2 && counter2 > i) {
    //     counter2--;
    //   }
    //   let temp = arr[counter2];
    //   arr[counter2] = arr[i];
    //   arr[i] = temp;
    //   counter2--;
    // }
  }
  return resultArray;
}

console.log('1', SortGivenArray([0, 1, 1, 2, 2, 0]));
console.log('2', SortGivenArray([0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 2, 2, 2]));
console.log('3', SortGivenArray([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]));
console.log('3', SortGivenArray([1, 2, 0, 1, 2, 1]));
