function verificar(){
    var nome = document.getElementById('nome').value.toUpperCase()
    var res = document.getElementById('res')
    var c = 0
   while(nome != 'THOMAS' || c== 0){
        if ( res != ""){
            console.log(`O nome digitado foi ${nome}`) 
            c++
            var nome = document.getElementById('nome').value.toUpperCase()
        }
        else{
            console.log(`Digite u `) 
        }
    }
}