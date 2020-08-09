 
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://7616ef62c14e.ngrok.io/ajax'
});


export default api;