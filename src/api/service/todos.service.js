export default api => {
    api.todos = {
        getTodos() {
            return api.request.get('/todos');
        },
        addTodos({ title = '', complete = false }) {
            return api.request.post('/todos', { title, complete })
        }
    }
}