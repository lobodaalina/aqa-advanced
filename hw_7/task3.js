/* Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат 
виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator 
дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення 
"Робота завершена" в консоль, навіть якщо помилка виникла або не виникла. */

function divide(numerator, denominator) {
	if (denominator === 0) {
		throw new TypeError('Ділення на нуль недопустиме!');
	}
	if (isNaN(numerator) || isNaN(denominator)) {
		throw new TypeError('Це не цифра!');
	}
	return numerator / denominator;
}

console.log(divide(10, 5));

try {
	divide('fkff', 1);
} catch (e) {
	console.error(e);
}

try {
	divide(10, 0);
} catch (e) {
	console.error(e);
} finally {
	console.log('Робота завершена');
}
