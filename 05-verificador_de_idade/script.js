function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtno')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        // cria elemnto imagem
        var img = document.createElement('img')
        // cria um id para o img
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagem/menino.png')
            } else if (idade < 21) {
                // jovem 
                img.setAttribute('src', 'imagem/adolescenteH.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagem/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagem/menina.png')
            } else if (idade < 21) {
                // jovem 
                img.setAttribute('src', 'imagem/adolescenteM.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagem/mulheradulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `A pessoa de sexo ${genero} tem ${idade} anos.`
        res.appendChild(img)
    }
}