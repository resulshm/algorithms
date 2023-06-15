function steamrollArray(arr) {
  let elem = [];
  getElements(arr, elem);
  return elem;
}

function getElements(arr, elements) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getElements(arr[i], elements);
      continue;
    }
    elements.push(arr[i]);
  }
}

let result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);
