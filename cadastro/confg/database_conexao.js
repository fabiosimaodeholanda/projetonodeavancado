const mysql =require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "fseletro",
    password: "@fabio123",
    user: "fabio",
  });

  
  const query = (sql, callBack) => {
    return connection.query(sql, callBack);
  };
  


module.exports = {
    connection,
    query,
  };












const Conexao= mysql.createPool({
    host:'localhost',
    user: 'fabio',
    password:'@fabio123',
    database:'fseletro',
})
module.exports= Conexao;




const Sequelize =require('sequelize'); 
//                           
const Conexao = new Sequelize('fseletro','fabio' , '@fabio123', {
    host:'localhost', 
    dialect:'mysql2'
})
Conexao.authenticate()
.then(()=>{
        console.log("conectado com sucesso!")
    }).catch((erro)=>{
        console.log("falha ao se conectar: "+erro)
})
module.exports = Conexao;