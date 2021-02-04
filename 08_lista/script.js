var num = document.getElementById('txtn')
var resadd = document.getElementById('res')
var resfim = document.getElementById('resfim')
let vetorN = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function naLista(n, lista){
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !naLista(num.value, vetorN)){
        vetorN.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        resadd.appendChild(item)
        resfim.innerHTML = ''
    } else {
        alert('Valor inválido ou já está na lista !')
    }
    // limpa o inout number e redireciona o foco para ele
    num.value = ''
    num.focus()    
}

function finalizar() {
    if (vetorN == 0) {
        alert('Adicione valores antes de finalizar !')
    } else {
        let total = vetorN.length
        let maior = vetorN[0]
        let menor = vetorN[0]
        let soma = 0
        let media = 0

        for (var pos in vetorN){
            soma += vetorN[pos]
            if (vetorN[pos] > maior) {
                maior = vetorN[pos]
            } 
            if (vetorN[pos] < menor) {
                menor = vetorN[pos]   
            }
        }
        media = soma / vetorN.length

        resfim.innerHTML = '' 
        resfim.innerHTML += `<p> Ao todo temos: ${total} números cadastrados. </p>`
        resfim.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        resfim.innerHTML += `<p> O maior valor informado foi ${menor}. </p>`
        resfim.innerHTML += `<p> A soma de todos os valores é ${soma}. </p>`
        resfim.innerHTML += `<p> A média dos valores é ${media}. </p>`
    }
}