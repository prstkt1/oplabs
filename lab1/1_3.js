const arr = [true, 'hello', 11, 55, -300, false, false, 'word', null, undefined, 42, 'example', true, 'word'];

const typeCount = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,      
    undefined: 0    
}
for (const element of arr) {
    const type = typeof element;
    typeCount[type] += 1;
}

console.dir(typeCount);