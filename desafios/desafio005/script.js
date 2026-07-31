let num = document.querySelector('input#num');
let lista = document.querySelector('div#lista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function limite(l) {
    return l.length >= 18
}
function adicionar() {
    if (limite(valores)) {
        alert('Limite de 18 itens excedito');
        return;
    }
    if (!isNumero(num.value)) {
        alert('Valor inválido!');
        return;
    }
    if (inLista(num.value, valores)) {
        alert('valor invalido ou já adicionado na lista!');
        return;
    } 

    lista.innerHTML += `O valor ${num.value} foi adicionado <br>`;  
    valores.push(Number(num.value));
    res.innerHTML = '';
}

function finalizar() {
    if (valores.length == 0) {
        alert('Você precisa adicionar valores antes de finalizar')
    } else {
        res.innerHTML += `Ao todo temos ${total()} numeros cadastrados <br>`;
        res.innerHTML += `O maior valor foi ${maior()}.<br>`;
        res.innerHTML += `O menor valor foi ${menor()}.<br>`;
        res.innerHTML += `Somando todos os valores é igual a ${soma()}<br>`;
        res.innerHTML += `A media dos valores é ${media().toFixed(2)}`;
    }
}
function total() {
    return valores.length;
}

function maior() {
    valores.sort((a, b) => a - b);
    return valores.at(-1);
}
function menor() {
    return valores.at(0)
}
function soma() {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma;
}
function media() {
    return soma() / total();
}