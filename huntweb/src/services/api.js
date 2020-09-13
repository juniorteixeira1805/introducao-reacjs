import axios from 'axios'

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'}) //URL de onde vão partir todas as requisições da api

export default api;

//Arquivo para configuração do axios, para consumir as api's