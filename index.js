/* 
Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
Функція повинна повертати результат (у середині функції не має бути консоль лога!)
*/
 
function calculateMultiplicatinOfNumbers(num1) {

        return function (num2) {
          return num1 * num2;
        }
}

const result = calculateMultiplicatinOfNumbers(5)(2);

console.log(result);