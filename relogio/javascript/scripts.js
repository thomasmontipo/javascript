var data = new Date()
var hora = data.getHours()
var res = document.getElementById('msg')
var img = document.getElementById('imagem')

var hora = 00

if (hora < 6){
    imagem.src="imagens/00.jpg"
}

if (hora > 6 && hora < 12){
    imagem.src="imagens/06.jpg"
}

if (hora >= 12 && hora < 18){
    imagem.src="imagens/12.jpg"
}

if (hora >= 18 && hora <= 23){
    imagem.src="imagens/18.jpg"
}
