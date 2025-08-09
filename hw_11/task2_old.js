/* В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних*/

const myPromise = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/todos/1');
});

const getToDo = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			resolve(response.json());
		})
		.catch((error) => {
			reject(error);
		});
});

const getUser = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => {
			resolve(response.json());
		})
		.catch((error) => {
			reject(error);
		});
});

const promisesCollection = Promise.all([getToDo, getUser]);

let promiseAllResult;
promisesCollection.then((result) => {
	console.log(result);
	promiseAllResult = result;
});

let promiseRaceResult;
Promise.race([getToDo, getUser]).then((result) => {
	console.log('Fulfilled: ', result);
	promiseRaceResult = result;
});
