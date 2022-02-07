/**
 * -----------
 * Quick Sort
 * -----------
 * Complexity
 * ------------------------
 * Best :       O(nlog(n))
 * Average :    O(nlog(n))
 * Worst :      O(n^2)
 *              If the arrays are already sorted in asc/desc order and we pick 1st element as pivot
 * Memory :     O(log(n))
 * ------------------------
 */

const QuickSort = (arr) => {
  const arrClone = [...arr];
  if (arr.length <= 1) return arrClone;

  let leftArray = [];
  let rightArray = [];

  const pivotElement = arr.shift();
  let centerArray = [pivotElement];

  for (i = 1; i < arrClone.length; i++) {
    if (arrClone[i] === pivotElement) {
      centerArray.push(arrClone[i]);
    } else if (arrClone[i] < pivotElement) {
      leftArray.push(arrClone[i]);
    } else if (arrClone[i] > pivotElement) {
      rightArray.push(arrClone[i]);
    }
  }

  let leftSortedArray = QuickSort(leftArray);
  let rightSortedArray = QuickSort(rightArray);

  return leftSortedArray.concat(centerArray, rightSortedArray);
};

const input = [4, 8, 2, 1, 27, 9, 6, 3, 7, 98];
console.log('QuickSort: ', QuickSort(input));

/**
 * -----------
 * Merge Sort
 * -----------
 * Complexity
 * ------------------------
 * Best :       O(nlog(n))
 * Average :    O(nlog(n))
 * Worst :      O(nlog(n))
 * Memory :     O(n)
 * ------------------------
 */

const MergeSortedArray = (leftSortedArray, rightSortedArray) => {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < leftSortedArray.length &&
    rightIndex < rightSortedArray.length
  ) {
    if (leftSortedArray[leftIndex] <= rightSortedArray[rightIndex]) {
      sortedArray.push(leftSortedArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightSortedArray[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray
    .concat(leftSortedArray.slice(leftIndex))
    .concat(rightSortedArray.slice(rightIndex));
};

const MergeSort = (arr) => {
  const arrClone = [...arr];
  if (arrClone.length <= 1) return arrClone;

  const center = Math.floor(arrClone.length / 2);

  const leftArray = arrClone.slice(0, center);
  const rightArray = arrClone.slice(center);

  return MergeSortedArray(MergeSort(leftArray), MergeSort(rightArray));
};

console.log('MergeSort: ', MergeSort(input));

/**
 * -----------
 * Bubble Sort
 * -----------
 * Complexity
 * ------------------------
 * Best :       O(n)
 * Average :    O(n^2)
 * Worst :      O(n^2)
 * Memory :     O(1)
 * ------------------------
 */

const BubbleSort = (arr) => {
  const arrClone = [...arr];
  if (arrClone.length <= 1) return arrClone;

  for (i = arrClone.length - 1; i >= 0; i--) {
    for (j = 1; j < arrClone.length; j++) {
      if (arrClone[j] < arrClone[j - 1]) {
        let temp = arrClone[j];
        arrClone[j] = arrClone[j - 1];
        arrClone[j - 1] = temp;
      }
    }
  }

  return arrClone;
};

console.log('BubbleSort : ', BubbleSort(input));
