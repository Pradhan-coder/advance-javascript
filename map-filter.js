 const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 1; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);


// }

//console.log(output);
// function square(element){
//     return element * element;
// }
// numbers.map(function(element, index, array){ //map ar modda 3 element k nita pare.
//     console.log(element, index, array);
// })
//console.log(output);

// function square(element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })
// st result = numbers.map(x => x * x);// right method/ for me
// console.log(result);con
//const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x > 5);
console.log(isThere);