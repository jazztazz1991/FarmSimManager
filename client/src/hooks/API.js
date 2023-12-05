import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'https://farm-sim-manager-d52ef6c31c0f.herokuapp.com';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000
})


export default instance;