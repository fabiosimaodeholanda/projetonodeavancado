const express = require('express');
const app = express();
const routes = require('./routes');


const bodyParser= require('body-parser'); 
const cors =require('cors'); // 



app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json()); 
app.use(cors())



app.use(routes);




app.listen(4000,()=>{
    console.log('servidor ativo ')
});