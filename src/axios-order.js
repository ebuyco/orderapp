import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://react-burger-app-3415e.firebaseio.com/'
});

export default instance;
