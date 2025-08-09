/* Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд 
як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд */

function sayPhrase (phrase) {
    console.log(phrase)
}

function delayText (text, delay) {
    setTimeout(() => sayPhrase(text), delay);

}

delayText('hi', 4000)