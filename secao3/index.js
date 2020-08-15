//aprendendo sobre rotas

const express = require("express"); //importando
const app = express(); //iniciando função que carrega todo o framework para uso


app.get("/", function(req, resp){
    resp.send("Oi tanizia")
})


//usando parametro não obrigatorio (inserir ? na frente do parametro)
app.get("/blog/:artigo?", function(req,resp){

    var artigo = req.params.artigo

    if(artigo){ //is exists
        resp.send("bem vindo ao meu blog")
    }else{  //not exists
        resp.send("Artigo não encontrado")
    }
    
})


//usando parametro obrigatorio
app.get("/ola/:nome/:empresa", function(req, resp){
    //REQ = DADOS ENVIADOS PELO USUARIO 
    //RESP =  RESPOSTA DO SERVIDOR PARA O USUARIO
    var nome =  req.params.nome
    var empresa = req.params.empresa
    resp.send("<h1>oi " + nome + " da " + empresa +"</h1>") //acessando o nome enviado pelo usuario
})

//usando querys params (parametros dinâmicos)
app.get("/canal/youtube", function(req,resp){
    var canal = req.query["canal"]
    
    if(canal){
        resp.send(canal)
    }else{
        resp.send("Nenhum canal fornecido")
    }
})

app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso")
    }
})