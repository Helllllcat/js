
//  dataType //

// 1.Number
// 2.BigInt
// 3.String
// 4.Boolean
// 5.Symbol
// 6.Object
// 7.Null
// 8.undefined
// typeof(null) -- object
// typeof NaN -- number

function exampleFunc(...rest) {
    //позволяет принимать массив с любым колличеством значений
    console.log(rest); //output is array
}


// Замыкание это функция в функции, она использует значение которое передано в родителькую функцию

const numSum = function (num1) {
    return function(num2){
        return num1 + num2;
    }
}
const num1 = numSum(2);
console.log(num1(321));
