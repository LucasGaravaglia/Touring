 
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://26bb498febd5.ngrok.io/ajax'
});


export default api;