function verificar(){
    data = new Date()
    hora = data.getHours()
    hora = 10
    console.log(hora)
    var imagem = window.document.getElementById('imagem')
    var txt = window.document.querySelector('div#msg')
    console.log(txt)

    if (hora == 0 || hora == 1){
        imagem.src='imagens/00.jpg'
        txt.innerHTML = `São ${hora} hora`
        window.document.body.style.background = "black"
    }
    
    else{
        txt.innerHTML = `São ${hora} horas`
        if (hora <= 6){
            imagem.src='imagens/00.jpg'
            window.document.body.style.background = "black"

        }

        else if (hora > 6 && hora <= 10){
            imagem.src='imagens/06.jpg'
            window.document.body.style.background = "yellow"
        }

        else if (hora > 10 && hora <= 18){
            imagem.src='imagens/12.jpg'
            window.document.body.style.background = "orange"
        }

        else if (hora > 18 && hora <= 23){
            imagem.src='imagens/18.jpg'
            window.document.body.style.background = "#333"
        }
    }

} 