/* Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі */

const users = [
    {
        name: 'user1',
        email: 'User1@gmail.com',
        age: 15
    },
    {
        name: 'user2',
        email: 'User2@gmail.com',
        age: 20
    },
    {
        name: 'user3',
        email: 'User3@gmail.com',
        age: 50
    },

];

for (const user of users) {
    console.log(user)
};

for (const {name, email, age } of users) {
    console.log(`Username: ${name}, email: ${email}, age: ${age}`)
}