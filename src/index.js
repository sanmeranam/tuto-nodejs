const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');

const saveAsJsonFIle = async (data) => {
    try {
        await fs.promises.writeFile('data.json', JSON.stringify(data, null, 2));
        console.log('Data saved to data.json');
    } catch (error) {
        console.error(error);
    }
}
    

const getPosts = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        await saveAsJsonFIle(_.map(data,'title'));
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getPosts();