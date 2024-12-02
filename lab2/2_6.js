const average = (a,b) => {
    return (a+b)/2;
   
}
const square = (x) => {
    return x ** 2;
}
const cube = (x) => {
    return  x ** 3;
}
const calculate = () => {
    let ArrAvg = [];
    for(let i = 0;i<=9;i++){
       let avg = average(square(i),cube(i));
       ArrAvg.push(avg);
    }
    console.log(ArrAvg);

}
calculate();