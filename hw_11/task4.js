class AsyncDataFetcher {
	async fetchToDo() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const data = await response.json();
		return data;
	}

	async fetchUser() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		const data = await response.json();
		return data;
	}

	async getPromisesCollection() {
		const result = await Promise.all([this.fetchToDo(), this.fetchUser()]);
		console.log('promise all result:', result);
		return result;
	}

	async getPromiseRace() {
		const result = await Promise.race([this.fetchToDo(), this.fetchUser()]);
		console.log('promise race result:', result);
		return result;
	}
}

const asyncDataFetcherExample = new AsyncDataFetcher();

const fetchedToDo = await asyncDataFetcherExample.fetchToDo();
console.log(fetchedToDo);

const fetchedUser = await asyncDataFetcherExample.fetchUser();
console.log(fetchedUser);

const fetchedAll = await asyncDataFetcherExample.getPromisesCollection();
console.log(fetchedAll);

const fetchedRace = await asyncDataFetcherExample.getPromiseRace();
console.log(fetchedRace);
