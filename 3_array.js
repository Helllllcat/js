//array.isArray() -- проверка на то является ли значение переменной массивом
// Цикл for of для перебора элементов массива
const exampleArr = [`I`, `Learn`, `Js`];
for (let value of exampleArr){
    console.log(value);
}
// array.push(`firstElem`, `secondElem`) -- добавляет один или несколько элементов в конец массива
// array.unshift(`firstElem`, `secondElem`) -- добавляет один или несколько элементов в начало массива
// array.shift() -- удаляет первый элемент массива и возвращает его
// array.pop() -- удаляет последний элемент массива и возвращает его
// array.reverse() -- Первый элемент массива становится последним, а последний — первым.
// array.indexOf(`JS`, start index) -- возвращает индекс элемента в массиве, если его нет то возвращает -1
// array.join([`разделитель `]) -- делаем строку из массива
// exampleArr.includes('Js', start index) -- возвращает true/false
// array.concat() -- используется для конкатенации массивов 

// array.flat(уровень вложености) -- все вложенные подмассивы поднять на указаный уровень вложенности
//(инфинити уберет все уровни)

const firstArr = [1,2,3,4];
const secondArr = [123,4,124];
const finalResult = firstArr.concat(secondArr);
console.log(finalResult);

// array.findIndex() -- 
    const people = [
        {name: `Roma`, money: 15000},
        {name: `Olya`, money: 5000}
    ]
   const index =  people.findIndex((person, index, array)=>{
        return person.money === 5000
    })
    console.log(index); // выводит индекс человека который соответ ствует условию
    
 // array.find() --    
    const person =  people.find((person, index, array)=>{
        return person.money === 5000
    })
    console.log(person); // выводит сразу человека

// array.some() -- 
    const isInArr = people.some((person)=> person.surnamename)
    console.log(isInArr); // проверяет наличие елемента в массиве

//array.map() -- создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const cars = [`Lada`,`Booba`];
const upperCars = cars.map(car => car.toUpperCase());
console.log(upperCars);

//array.filter() --создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const numbers = [1,2,3,4,5,6,123123];
const filteredNumbers = numbers.filter(num => num < 10);
console.log(filteredNumbers);

// array.forEach() -- получить каждый элемент массива 

const eachArr = [1,2,3,4];

const eachFinal = eachArr.forEach((element,index,array)=>{
    console.log(element);
})

//splice
let arr = ["Я", "изучаю", "JavaScript"];

// удалить 3 первых элемента и заменить их другими (возвращает массив удаленных элементов)
let delElem = arr.splice(0, 3, "Давай", "танцевать");
console.log(arr);

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");

//arr.slice([start], [end]) копирует елементы и возвращает их в виде нового массива

//arr.reduce()

const reduceArr = [`I`,`Love`,`Js`];

const reduceResult = reduceArr.reduce((acc,element) => {
    acc[`${element}-name`] = element;
    return acc;
} , [])
console.log(reduceResult);

// const reduceResult = reduceArr.reduce((накопитель,елемент массива) => {
//     return acc;
// } , тип данных накопителя)


