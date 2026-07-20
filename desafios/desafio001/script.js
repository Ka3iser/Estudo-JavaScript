function carregar() {
    let horario = document.querySelector('div#msg');
    let image = document.querySelector('div#image');
    let titulo = document.querySelector('h1#tittle');
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`;

    if (hora > 5 && hora< 13) {
        image.innerHTML = `<img src="https://images.pexels.com/photos/16077009/pexels-photo-16077009.jpeg" alt="">`;
        document.body.style.background = 'rgb(223, 194, 156)';
        
    } else if (hora >= 13 && hora < 18) {
        image.innerHTML = `<img src="https://images.pexels.com/photos/30667600/pexels-photo-30667600.jpeg" alt="">`;
        document.body.style.background = 'rgb(206, 113, 36)';
    } else {
        image.innerHTML = `<img src="https://images.pexels.com/photos/4839486/pexels-photo-4839486.jpeg" alt="">`;
        document.body.style.background = 'rgb(33, 23, 70)';
    }
}