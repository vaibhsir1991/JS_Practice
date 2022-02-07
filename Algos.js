// ---- PolyFill for Bind -----

let name = {
  firsName: "Vaibhav",
  lastName: "Sirsikar",
};

let printName = function (hometown, state, country) {
  console.log(this.firsName, this.lastName, hometown, state, country);
};

let printMyName = printName.bind(name);
//printMyName();

Function.prototype.myBind = function (...args) {
  var obj = this;
  var params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Wardha", "Test", "India");
printMyName2();

// ------ Higher Order Functions ------

function x() {
  console.log("This is X");
}

function y(x) {
  x();
}

const radius = [3, 1, 2, 4];

//HOC function
const calulate = function (radius, x) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(x(radius[i]));
  }
  return output;
};

const area = (radius) => radius * radius * Math.PI;
const circumference = (radius) => 2 * radius * Math.PI;
const diameter = (radius) => radius + radius;

console.log(calulate(radius, area));
console.log(calulate(radius, circumference));
console.log(calulate(radius, diameter));

/// Polyfill for Map

Array.prototype.myMap = function (x) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(x(this[i]));
  }
  return output;
};

console.log(radius.myMap(diameter));

//Generator function

function* generateNumber(args) {
  this.value = args;
  //yield value;
  //yield value++;
  yield this.value++;
}

function generateNumber2(value, upperLimit) {
  return function () {
    return value === upperLimit ? value : value++;
  };
}
var a = generateNumber(1);
console.log(a);

// Sorting Algorithms

a = [1, 3, 5, 6, 8, 7, 9, 4, 0];

//console.log(a.sort((a, b) => b - a));

Array.prototype.bubbleSort = function () {
  let arr = this;
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

Array.prototype.selectionSort = function () {
  let arr = this;
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};

function merge(left, right) {
  var result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

const mergeSort = function (arr) {
  var len = arr.length;
  if (len < 2) return arr;
  var mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(a));

// ------ Searching Algos ------

// Binary Search
// ** Works only with Sorted Arrays

function recursiveBinarySearch(array, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (array[mid] === x) return true;

  if (array[mid] > x) {
    return recursiveBinarySearch(array, x, start, mid - 1);
  } else {
    return recursiveBinarySearch(array, x, mid + 1, end);
  }
}

if (recursiveBinarySearch(a.bubbleSort(), 9, 0, a.length))
  console.log("Element found");
else console.log("Element Not found");

//-----Memoization Prototype ---

Function.prototype.memoized = function () {
  const cache = new Map();
  const originalFunction = this;

  return (...args) => {
    let key = "";
    for (arg of args) {
      key = key + arg;
    }

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      cache.set(key, originalFunction(...args));
      return originalFunction(...args);
    }
  };
};

const memoizedFunction = (callBack) => {
  const cache = new Map();

  return (...args) => {
    let key = "";
    for (arg in args) {
      key = key + arg;
    }

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      cache.set(key, callBack(...args));
    }
  };
};

const add = function (a, b) {
  return a + b;
};

const memoizedAdd = add.memoized();
memoizedAdd(1, 2);

//---------------Deep Copying-----------

function deepCopy(object) {
  var keys = Object.keys(object);

  if (typeof object !== "object" || !object || object === null || !keys.length)
    return;

  var objectCopy = {};

  for (key of keys) {
    if (typeof object[key] === "object") {
      objectCopy[key] = deepCopy(object[key]);
    } else {
      objectCopy[key] = object[key];
    }
  }

  return objectCopy;
}

var oldObject = { a: 10, b: 20, c: { d: { e: 30 } } };
var newObject = deepCopy(oldObject);

newObject.c.d.e = 1000;

console.log("olcobject :", oldObject);
console.log("newObject :", newObject);
