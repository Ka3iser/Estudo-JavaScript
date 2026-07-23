function tabuada() {
    let num = document.querySelector('input#num');
    let tabuada = document.querySelector('div#res');
    let cal;

    num = Number(num.value);

    if (num <= 0) {
        alert('ERRO, digite um numero inteiro a partir de 1');
        return;
    }
    tabuada.innerHTML = '';
    for (let i = 0; i <= 10; i++) {
        cal = num * i;
        tabuada.innerHTML += `${num} x ${i} = ${cal} <br>`;
    }
}