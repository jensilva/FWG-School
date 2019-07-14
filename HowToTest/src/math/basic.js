module.exports = {

sum:  (...numbers) => {
    let result = 0;
    numbers.forEach((number)=> {
        result +=number;
    })
    return result;
},
    
subtract: (...numbers) => {
    let result = numbers[0];
    numbers.shift(1);
    numbers.forEach((number)=> {
        result = result - number;
    })
    return result;

},
    
multiply: (number1, number2) => number1 * number2,
    
divide: (number1, number2) => number1 / number2

}






   