import axios from "axios";

const api = axios.create({
    baseUrl: 'https://sujeitoprogramador.com/rn-api/'
});

export default api;

