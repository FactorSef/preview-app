import axios from 'axios';

const requireServices = require.context( './service', true, /.service.js$/ )

class API {
    request = axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })

    constructor() {
        requireServices.keys().forEach(filename => {
            requireServices(filename).default(this);
        })
        
        this.request.interceptors.response.use(
            function (response) {
                return response.data;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    }
}

const api = new API();
export { api };