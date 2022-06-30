function verificar(){

    /*Entradas de variáveis*/
    var fano = Number(window.document.querySelector('input#ano').value)
    var data = new Date()
    var ano = Number(data.getFullYear())
    var res = window.document.querySelector('div#res')
    var idade = ano - fano
    res.innerHTML = `${fano}` //certo
    res1.innerHTML = `${data}`//certo
    res2.innerHTML = `${ano}` //certo
    res4.innerHTML = `${idade}` //certo

    //Cálculo da idade
    
    if (idade<0 || idade > 120 || fano.value.length == 0){
        window.alert('[ERRO] Ano de nascimento inválido')
    }

    //Validando o sexo

    else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
        }

        else if(fsex[1].checked){
            genero  = `Mulher`
        }
    
        res.innerHTML = `Detectamos ${genero}`
    }

}