const { query } = require('../config/conexao');


const MostrarProdutos=(req,res)=>{
    query('SELECT * FROM produtos',(erro,result)=>{
        res.render('formulario/index',{dados:result});
    })    
}

const InserirProdutos=(req,res)=>{
    const dados = req.body 
    query('INSERT INTO produtos SET ?',dados,res.redirect('/'))
}

const DeletarProdutos=(req,res)=>{
    let dados = req.params.id
    query(`delete from produtos where id_produtos=${dados}`,() => {
        res.redirect('/')
    })
}

module.exports={
    MostrarProdutos,
    InserirProdutos,
    DeletarProdutos
};