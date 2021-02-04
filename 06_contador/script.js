function contar() {
    var txtin = document.getElementById('txtini')
    var inicio = Number(txtin.value)
    var txtfi = document.getElementById('txtfim')
    var fim = Number(txtfi.value)
    var txtpas = document.getElementById('txtpasso')
    var passo = Number(txtpas.value)
    var res = document.getElementById('res') 

    if (inicio == ' ') {
        res.innerHTML = 'Impossível contar, inicio não pode ser vazio ...'
    } else if (fim == ' ') {
        res.innerHTML = 'Impossível contar, fim não pode ser vazio ...'
    } else {
        if (passo <= 0) {
            alert('Passo inválido ! Considerando PASSO 1.')
            passo = 1
        }
        res.innerHTML = 'Contando : <br>' 
        if (inicio < fim) {
            // contagem crescente
            for (var conta = inicio; conta <= fim; conta += passo) {
                res.innerHTML += `${conta}  \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (var conta = inicio; conta >= fim; conta -= passo){
                res.innerHTML += `${conta} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
   }
}