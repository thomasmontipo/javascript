function GerarTabuada(){

    var num = window.document.querySelector("input#num").value
    console.log(num)
    var selctab = window.document.querySelector('select#tab')
    console.log(selctab)
    selctab.style.visibility="visible"

    if(num.length == 0){
        window.alert('[ERRO] Favor inserir um número!')
    }

    else{
        var n = Number(num)
        
        for(var c=1; c <11; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            selctab.appendChild(item)
            console.log(item)
        }
    }
}

function OcultarTabuada(){
    var selctab = window.document.querySelector('select#tab')
    selctab.style.visibility="hidden"
}
