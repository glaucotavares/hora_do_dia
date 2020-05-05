function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia 
        img.src = 'fotomanha.png'
        document.body.style.background = '#feebc3'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#d29152'
    } else {
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2c5876'
    }
}
   
