let idade = 15;

if (idade < 16) {
    console.log('Você ainda não pode votar')
}else if (idade < 18) {
    console.log('Você pode votar(opcional)');
    
}else if(idade > 64){
    console.log('Você já não precisa mais votar');
    
}else {
    console.log("Você pode votar(obrigatorio)");
}