/*Створіть програму, в якій ви оголосите змінні для кожного з 
примітивних типів даних: рядок, число, буль, null та undefined. 
Присвойте їм значення та виведіть кожну змінну на консоль.
*/

let nameString = 'String Name';
let digitNumber = 28389;
let isActive = true;
let unimportantNote = null;
let undefinedValue = undefined;

console.log(nameString);
console.log(digitNumber);
console.log(isActive);
console.log(unimportantNote);
console.log(undefinedValue);

const age = 20;

if (age > 18) {
  console.log('Особа повнолітня');
} else if (age > 14) {
  console.log('Особа неповнолітня');
} else {
  console.log('Особа малолітня');
}
