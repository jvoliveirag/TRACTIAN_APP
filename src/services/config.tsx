import axios from 'axios';

const client = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api',
  timeout: 9000,
});

export default client;