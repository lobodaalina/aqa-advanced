/* В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних*/

const getToDo =
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })


const getUser =
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })

const promisesCollection = Promise.all([getToDo, getUser])

let promiseAllResult;
promisesCollection
    .then(result => {
        console.log('Fulfilled promise all:', result);
        promiseAllResult = result
    });

let promiseRaceResult;
Promise.race([getToDo, getUser])
    .then(result => {
        console.log('Fulfilled promise race: ', result);
        promiseRaceResult = result
    })
