const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    
    console.log(response);
    return response.data;
  })
  .catch(function (error) {

    console.log(error);
});

const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
    try {
        let json = await Cache('https://api.github.com/users/kloska', {
            duration: '1d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};