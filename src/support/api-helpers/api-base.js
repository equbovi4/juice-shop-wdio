const axios = require('axios').default;

class APIBase {
    constructor(url) {
        this.url = url;
    }

    async post(endpoint, body, config = {}) {
        try {
            const response = await axios.post(`${this.url}${endpoint}`, body, config);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async get(endpoint, config = {}) {
        try {
            const response = await axios.get(`${this.url}${endpoint}`, config);
            return response;
        } catch (error) {
            console.error(error);
        }
    } 
}

module.exports = APIBase;