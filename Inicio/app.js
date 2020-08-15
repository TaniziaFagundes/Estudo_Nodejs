/*var mostrarsite = true

const site = "www.guiadoprogramador.com"
console.log("hello world!")
console.log("Meu nome é Tanizia")
console.log("E eu estou aprendendo node.js")

if(mostrarsite){
    console.log(site)
}*/



/*
var calculadora = require("./calculadora")




console.log("o RESULTADO É: ",(calculadora.soma(10,20)))
var resultado = (calculadora.mult(2,5))
var resultadosub = calculadora.sub(40,20)
console.log(calculadora.mult(2,10))
console.log(resultado)
console.log(resultadosub)

console.log(calculadora.nome)   //exportando variavel
calculadora.nome = "New Name"   //mudando a variavel do outro arquivo
console.log(calculadora.nome)   //print do novo valor

*/

var http = require("http") //já vem no node esse modulo

http.createServer(function(requisicao, resposta){
    resposta.end("Bem Vindo ao Meu Site")
}).listen(8181);
console.log("Meu servidor está rodando")