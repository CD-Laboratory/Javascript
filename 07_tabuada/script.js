function multiplicar() {
    var txttab = document.getElementById('txttab')
    var res = document.getElementById('res') 
    var op00 = document.getElementById('priv')

    if(txttab.value == ' '){
        alert('Impossível gerar tabuada ! Verifique se o campo NÚMERO foi preenchido CORRETAMENTE.')
    } else {
        var tabuada = Number(txttab.value)
        op00.innerHTML = `A tabuada de ${tabuada} é : `
        for (var mult = 0; mult <= 10; mult++){
            var item = document.createElement('option')
            item.text = ` ${tabuada} x ${mult} = ${tabuada * mult}`
            item.value = `op${mult}`
            res.appendChild(item)
        }
    }
    
}