function tabuada(){
    var txt = window.document.querySelector('input#num').value
    var seltab = window.document.getElementById('seltab')
    seltab.style.visibility="visible"
    console.log(txt)
    console.log(seltab)

    if (txt.length == "" ){
        window.alert('[ERRO] Digite um número!')
    }

    else{
        var num = Number(txt)
        console.log(num)
        var c = 1

        seltab.innerHTML=""

        for (c; c < 11; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            seltab.appendChild(item)
            console.log(num*c)
            console.log(item)
        }
    }
}

function SumirTabuada(){
    var seltab = window.document.getElementById('tab')
    seltab.style.visibility="hidden"
}