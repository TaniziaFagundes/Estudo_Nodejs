var nome = "Minha Calculadora v1"

function soma(a,b){
    return a+b
}

function mult(a,b){
    return a*b
}

function sub(a,b){
    return a-b
}

module.exports = {
    soma,
    mult,
    sub,
    nome
};


// module.exports = soma;  exportando a function soma para ser usada em outros arquivo, por require