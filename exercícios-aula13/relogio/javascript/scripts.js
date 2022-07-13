function carregar() {
    var msg = window.document.querySelector('p#msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var horas = date.getHours()
    msg.innerHTML = `São ${horas} horas`

    if (horas <= 1){
        imagem.src = 'imagens/00.jpg'
        document.body.style.backgroundColor = '#333'
        msg.innerHTML = `São ${horas} hora`
    }

    else if (horas <=4){
        imagem.src = 'imagens/00.jpg'
        document.body.style.backgroundColor = '#333'
    }

    else if (horas < 6 ){
        imagem.src = 'imagens/04.jpg'
        document.body.style.backgroundColor = '#333'
    }

    else if (horas < 10 ){
        imagem.src = 'imagens/06.jpg'
        document.body.style.backgroundColor = '#fdfd96'
    }

    else if (horas < 12){
        imagem.src = 'imagens/10.jpg'
        document.body.style.backgroundColor = 'ffff00'
    }

    else if (horas < 14){
        imagem.src = 'imagens/12.jpg'
        document.body.style.backgroundColor = 'ffc222'
    }

    else if (horas < 18){
        imagem.src = 'imagens/16.jpg'
        document.body.style.backgroundColor = 'orange'
    }

    else {
        imagem.src = 'imagens/18.jpg'
        document.body.style.backgroundColor = '#333'
    }
}