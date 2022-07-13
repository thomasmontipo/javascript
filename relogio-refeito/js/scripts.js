function carregar(){
    var res = document.getElementById('res')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()

    res.innerHTML = `Seja bem-vindo, são ${hora} horas!`

    if(hora <= 4){
        document.getElementById('imagem').src = 'imagens/00.jpg';
    }

    else if(hora <= 6) {
        document.querySelector('img#imagem').src = 'imagens/04.jpg'
    }

    else if (hora <= 10) {
        document.querySelector('img#imagem').src = 'imagens/06.jpg'
    }

    else if (hora <= 12) {
        document.querySelector('img#imagem').src = 'imagens/12.jpg'
    }

    else if (hora <= 16) {
        document.querySelector('img#imagem').src = 'imagens/16.jpg'
    }

    else if (hora >= 18) {
        document.querySelector('img#imagem').src = 'imagens/18.jpg'
    }



}