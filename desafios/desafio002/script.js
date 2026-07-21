function verificar(){
    let botao = document.querySelector('input#button');
    let anoNascimento = document.querySelector('input#nascimento');
    let sexo = document.getElementsByName('sexo');
    let resultado = document.querySelector('div#resultado');
    let data = new Date();
    let ano = data.getFullYear();

    let img = document.createElement('img');
    img.setAttribute('class', 'foto');

    anoNascimento = Number(anoNascimento.value);
    let idade = ano - anoNascimento;
    let genero;

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        alert(`Erro, verifique os dados novamente`);
    }else{
        
    }
    
    
    if (sexo[0].checked) {
        genero = 'Mulher';
        if (idade <= 10) {
            img.setAttribute('src', 'img/bebeF.png');
        } else if(idade <= 20){
            img.setAttribute('src', 'img/criancaF.jpg');
        }else if(idade <= 45){
            img.setAttribute('src', 'img/adulta.jpg');
        }else if(idade <= 100){
            img.setAttribute('src', 'img/idosa.jpg');
        }else{
            img.setAttribute('src', 'img/caixao.jpg');
        }
    }else if(sexo[1].checked){
        genero = 'Homem';
        if (idade <= 10) {
            img.setAttribute('src', 'img/bebeH.jpg');
        } else if(idade <= 20){
            img.setAttribute('src', 'img/adolescente.jpg');
        }else if(idade <= 45){
            img.setAttribute('src', 'img/adulto.jpg');
        }else if(idade <= 100){
            img.setAttribute('src', 'img/idoso.jpg');
        }else{
            img.setAttribute('src', 'img/caixao.jpg');
        }
    }

    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.innerHTML += '<br>';
    resultado.appendChild(img);
    
}


