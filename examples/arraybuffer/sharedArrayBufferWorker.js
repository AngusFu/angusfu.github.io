function factorial(i) {
  var product = 1;
  while (i > 0) {
    product *= i;
    i--;
  }
  return product;
}

onmessage = function (ev) {
  var sharedBuffer = ev.data;
  var int32 = new Int32Array(sharedBuffer);
  var calcNext = (i) => {
    int32[i] = factorial(i);
    if (i < int32.length) {
      setTimeout(() => {
        calcNext(i + 1);
      }, 30);
    } else {
      postMessage('done');
    }
  };
  calcNext(0);
};
