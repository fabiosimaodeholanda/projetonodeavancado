const express = require('express')
const routes = express.Router();



routes.get('/',(req,res)=>{
    res.send('SEJA BEM VINDO!');
})


const ControleAPI = require("./models/modelSql");

    
routes.get('/api/produtos', ControleAPI.produtos);
routes.get('/api/comentarios', ControleAPI.comentarios);


routes.post('/api/recebimento', ControleAPI.insert);

module.exports= routes;