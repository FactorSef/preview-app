class API {
    getTodosFromCallback(callback = (data) => {}) {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(callback);
    }

    getTodos() {
        return fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
        })
            .then(result => {
                console.log(result);
                return result.json();
            })
    }

    addTodo({ title = '', complete = false }) {
        return fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ title, complete })
        }).then(res => res.json());
    }
}

const api = new API();

export default api;
export { api };