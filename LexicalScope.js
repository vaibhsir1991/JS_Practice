function Test(A) {
  var a = 'outerTest';
  if (A) {
    let a = 'innnerTest';
    console.log('Inner', a);
  }
  console.log('Outer', a);
}

Test(false);
Test(true);
