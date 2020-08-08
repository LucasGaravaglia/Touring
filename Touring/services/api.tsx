 
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://518e5852ea1b.ngrok.io'
});


export default api;