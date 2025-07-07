class ThenCatchFetcher {
    getToDo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .catch(error => {
                console.log(error)
            })
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .catch(error => {
                console.log(error)
            })
    }

    getPromisesCollection() {
        return Promise.all([this.getToDo(), this.getUser()])
    }

    getPromiseRace() {
        return Promise.race([this.getToDo(), this.getUser()])
    }
    
}

const thenCatchFetcherExample = new ThenCatchFetcher();

const fetchedToDo = thenCatchFetcherExample.getToDo()
console.log(fetchedToDo)

const fetchedUser = thenCatchFetcherExample.getUser()
console.log(fetchedUser)

const promiseAllCollection = thenCatchFetcherExample.getPromisesCollection()
let promiseAllResult;
promiseAllCollection
    .then(result => {
        console.log('Fulfilled promise all:', result);
        promiseAllResult = result
    });

const promiseRaceCollection = thenCatchFetcherExample.getPromiseRace()
let promiseRaceResult;
promiseRaceCollection
    .then(result => {
        console.log('Fulfilled promise race: ', result);
        promiseRaceResult = result
    })