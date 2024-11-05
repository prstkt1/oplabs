const arr = [true, 'hello', 11, 55, -300, false, false, 'word', null, undefined, 42, 'example', true,'word'];
const typeCount = {};

for (const item of arr) {
    const type = typeof item;
    if (!typeCount[type]) {
        typeCount[type] = 0;
    }
    typeCount[type]++;
}

console.dir(typeCount);