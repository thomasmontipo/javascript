function verificar(){
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pass = Number(document.getElementById('pass').value)


  for (var c = ini; c <= fim; c  += pass){
        res.innerHTML += `${c} `
    }

}