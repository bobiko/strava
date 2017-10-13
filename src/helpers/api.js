const axios = require('axios');

module.export = {
    fetchStrava: url =>
        axios
            .get(url)
            .then(response => response.data)
            .catch(error => console.error(error))
};