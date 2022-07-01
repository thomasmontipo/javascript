function funcao(){
    /*Entradas de variáveis*/
    var fano = Number(window.document.querySelector('input#ano').value)
    var data = new Date()
    var ano = Number(data.getFullYear())
    var res = window.document.querySelector('div#res')
    var idade = ano - fano
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.getElementById('img')
    
    //Cálculo da idade
    
    if (idade<0 || idade > 120 || fano.length == 0){
        window.alert('[ERRO] Ano de nascimento inválido')
    }
    //Validando o sexo
    else{
        if (fsex[0].checked) {
            genero = 'Homem'
        }

        else if(fsex[1].checked){
                genero  = `Mulher`
        }
    
        res.innerHTML = `<strong>Detectamos ${genero} de ${idade} anos </strong>`
        
    }   

    //Validando a imagem
    if (fsex[0].checked) {
        if(idade < 10 ){
        img.src =  'imagens/foto-bebe-m.png'
        }

        else if(idade < 25 ){
            img.src =  'imagens/foto-jovem-m.png'
        }

        else if(idade < 60 ){
            img.src =  'imagens/foto-adulto-m.png'
        }
        
        else if(idade > 60 && idade <= 120){
            img.src =  'imagens/foto-idoso-m.png'
        }
    }
    
    else if(fsex[1].checked){
        if(idade < 10 ){
            img.src =  'imagens/foto-bebe-f.png'
            }
    
        else if(idade < 25 ){
            img.src =  'imagens/foto-jovem-f.png'
        }

        else if(idade < 60 ){
            img.src =  'imagens/foto-adulto-f.png'
        }
        
        else if(idade > 60 && idade <= 120){
            img.src =  'imagens/foto-idoso-f.png'
        }
    }
}


