function verificar(){
    //recebendo as variáveis ano e sexo
    var data_nasc = window.document.getElementById('data_nasc').value
    var s_masc = window.document.getElementById('masc')
    var s_fem = window.document.getElementById('fem')


    // recebendo a variável do resultado e imagem
    var res = window.document.getElementById('res')
    var imagem = window.document.getElementById('img2')

    // Trabalhando com as datas
    let data_hoje = new Date().toISOString().slice(0, 10)

    // Calculando a idade
    idade = Math.trunc(((new Date (data_hoje) - new Date (data_nasc)) / (1000 * 60 * 60 * 24) / 365))

    // Testando as entradas e os cálculos
    console.log(data_nasc) //Variável dia como número
    console.log(res) // recebendo a div res
    console.log(s_masc) // Radio masculino checked?
    console.log(s_fem) // Radio feminino checked?
    console.log(idade) // Mostrar a idade (ano atual - ano nascimento)
    console.log(data_hoje) // Ano de hoje 
    console.log(imagem) // Pegando a div imagem     

    if (s_masc.checked == true){

        
        if (idade <= 18 ) {
            img2.src = "imagens/foto-bebe-m.png"
            res.innerHTML = `Detectamos um homem de ${idade} anos`
        }

        if (idade > 18 && idade <= 24 ) {
            img2.src = "imagens/foto-jovem-m.png"
            res.innerHTML = `Detectamos um homem de ${idade} anos`
        }

        if (idade > 24 && idade <= 65 ) {
            img2.src = "imagens/foto-adulto-m.png"
            res.innerHTML = `Detectamos um homem de ${idade} anos`
        }

        if (idade > 65 && idade <= 120) {
            img2.src = "imagens/foto-idoso-m.png"
            res.innerHTML = `Detectamos um homem de ${idade} anos`
            
        }

        if (idade > 120 ){
            window.alert('[ERRO] Idade indicada é acima de 120 anos! Favor entrar com uma nova data')
        }
    }

    if (s_fem.checked == true){
        
                
        if (idade <= 18 ) {
            img2.src = "imagens/foto-bebe-f.png"
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
        }

        if (idade > 18 && idade <= 24 ) {
            img2.src = "imagens/foto-jovem-f.png"
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
        }

        if (idade > 24 && idade <= 65 ) {
            img2.src = "imagens/foto-adulto-f.png"
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
        }

        if (idade > 65 && idade <= 120) {
            img2.src = "imagens/foto-idoso-f.png"
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
        }

        if (idade > 120 ){
            window.alert('[ERRO] Idade indicada é acima de 120 anos! Favor entrar com uma nova data')
        }
    }

}