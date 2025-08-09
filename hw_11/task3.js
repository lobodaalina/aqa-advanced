async function fetchToDo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const data = await response.json();
	return data;
}

async function fetchUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const data = await response.json();
	return data;
}

/*const promisesCollection = Promise.all([fetchToDo, fetchUser])

let promiseAllResult;
promisesCollection
    .then(result => {
        console.log(result);
    promiseAllResult = result
    })
;*/

let promiseAllResult;
async function getPromisesCollection() {
	const result = await Promise.all([fetchToDo(), fetchUser()]);
	console.log('promise all result:', result);
	promiseAllResult = result;
}

getPromisesCollection();

let promiseRaceResult;
async function getPromiseRace() {
	const result = await Promise.race([fetchToDo(), fetchUser()]);
	console.log('promise race result:', result);
	promiseRaceResult = result;
}

getPromiseRace();
