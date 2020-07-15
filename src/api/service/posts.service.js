export default api => {
    api.posts = {
        getPosts() {
            return api.request.get('/posts', {
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
        },
    }
}