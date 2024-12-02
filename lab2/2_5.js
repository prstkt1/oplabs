const rangeOdd = (start, end) => {
    let arr = [];
    for(let i = start; i <= end; i++){
        if (i % 2 !== 0) {
        arr.push(i);
        }
    }
    console.log(arr);
};
rangeOdd(15,30);