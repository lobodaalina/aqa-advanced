/* Завдання 1
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function) */

function squareDeclaration(width,height) {
    return width * height;
}

console.log(squareDeclaration(1,6))

const sqareExpression = function(width,height) {
    return width * height;
}

console.log(sqareExpression(1,6))

const squareArrow = (width,height) => width * height;

console.log(squareArrow(1,6))

