function carregar() {
    var msg = document.getElementById('msg')
    var foto =  document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h!`
    if (hora >= 4 && hora < 12) {
        //Bom dia
        foto.src = 'manha.png'
        document.body.style.backgroundColor = '#f4d68a'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        foto.src = 'tarde.png'
        document.body.style.backgroundColor = '#db721d'
    } else {
        //Boa noite
        foto.src = 'noite.png' 
        document.body.style.backgroundColor = '#313654'
    }
} 

    