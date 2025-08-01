/* Генерація таблиці множення
Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .
Виберіть число для якого потрібно згенерувати таблицю множення.
Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
Приклад вхідних даних:*/

const number = 8;

for (let i = 1; i <= 10; i++) {
	console.log(`${i} x ${number} = ${i * number}`);
}

let i = 1;
while (i <= 10) {
	console.log(`${i} x ${number} = ${i * number}`);
	i++;
}
