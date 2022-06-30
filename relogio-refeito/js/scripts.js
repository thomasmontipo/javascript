function carregar(){
    var res = document.getElementById('res')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()

    res.innerHTML = `${hora}`

    if (hora > 0 && hora < 4){
        document.getElementById(imagem).src = imagens/00.jpg; 
    }


}