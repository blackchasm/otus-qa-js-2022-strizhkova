const axios = require('axios');

const endpoint = "https://api.icq.net/bot/v1/";
axios.get(`${endpoint}/self/get`,{
    params: {
        token: '001.0948942904.0333789478:1008495713'
    }
})
.then((response) => console.log(response.data));