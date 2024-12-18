const pipe =(...fns) =>(x)=> {
    for(const f of fns){
    if (typeof f !== 'function') {
        throw new Error('All arguments must be a functions');
    }
    else{
        x=f(x);
    }
}
return x;
}
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const f = pipe(6,inc, twice, cube);
const x = f(5);
console.log(x);