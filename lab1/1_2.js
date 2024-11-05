function inc(num) {
    if (typeof num.n === 'number') {
        num.n += 1;
    }
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);