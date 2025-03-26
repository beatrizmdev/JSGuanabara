function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoEnv = document.getElementById('entAno')
    var resultado = document.getElementById('res')
    var img = document.createElement('img')
    if (anoEnv.value.length == 0 || Number(anoEnv.value) > ano) {
        window.alert(`ERRO! Verifique os dados e tente novamente.`)
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(anoEnv.value)
        var gênero = ''
        if (sex[0].checked) {
            gênero = 'masculino'
            if (idade>=0 && idade<=10) {
                img.setAttribute('src','HC.png')
            } else if (idade<40) {
                img.setAttribute('src','HA.png')
            } else if (idade<80) {
                img.setAttribute('src','HCO.png')
            } else {
                img.setAttribute('src','HI.png')
            }
                
        } else if (sex[1].checked) {
            gênero = 'feminino'
            if (idade>=0 && idade<=10) {
                img.setAttribute('src','MC.png')
            } else if (idade<40) {
                img.setAttribute('src','MA.png')
            } else if (idade<80) {
                img.setAttribute('src','MCO.png')
            } else {
                img.setAttribute('src','MI.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Você é do gênero ${gênero} e têm ${idade} anos.`
        resultado.appendChild(img)
    }
}