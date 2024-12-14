function array() {
  const arr = [];

  function array(index) {
    if (index !== undefined && typeof index === "number") {
      return arr[index];
    }
    return undefined;
  }
  array.push = function (value) {
    arr.push(value);
  };
  array.pop = function () {
    return arr.pop();
  };
  return array;
}

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined
