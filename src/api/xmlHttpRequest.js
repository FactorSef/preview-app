class API {
    getTodos(callback = (data) => {}) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://jsonplaceholder.typicode.com/todos', true);

        xhr.setRequestHeader('Age', '0');

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                console.log(JSON.parse(this.response));
                callback(JSON.parse(this.response))
            }
        };

        xhr.send();
    }

    addTodo(todoToSend, callback = (data) => {}) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://jsonplaceholder.typicode.com/todos', true);

        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                console.log(JSON.parse(this.response));
                callback(JSON.parse(this.response))
            }
        };

        xhr.send(JSON.stringify(todoToSend));
    }
}

const api = new API();

export default api;
export { api };