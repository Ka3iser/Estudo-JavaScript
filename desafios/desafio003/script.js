function contar() {
    let ini = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('div#resultado');

    if (ini.value.length == 0 || fim.value.length == 0 || fim.value.length == 0) {
        window.alert('Faltam dados!');
        return;
    }
    else{
        ini = Number(ini.value);
        fim = Number(fim.value);
        passo = Number(passo.value);
        res.innerHTML = '';

        if (passo <= 0) {
            res.innerHTML = 'Passo invalido, considerando passo 1';
            passo = 1;
        }

        if (ini < fim) {
            //contagem crescente
            for(ini; ini <= fim; ini+=passo){
            res.innerHTML += `${ini} &#x1F449; `;
        }
        } else {
            //contagem regressiva
            for (ini; ini >= fim; ini-=passo) {
                res.innerHTML += `${ini} \u{1F449}`;
            }
        }

        res.innerHTML += `Fim \u{1F3C1}`;
   }   
}