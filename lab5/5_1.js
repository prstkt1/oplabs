function seq(...args) {
  const functions = [...args];

  function chain(...nextArgs) {
    if (typeof nextArgs[0] === "function") {
      functions.unshift(...nextArgs);
      return chain;
    } else if (typeof nextArgs[0] === "number") {
      return functions.reduce((acc, fn) => fn(acc), nextArgs[0]);
    }
  }

  return chain;
}
console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
