 
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://touringstartup.atspace.cc/ajax'
});


export default api;