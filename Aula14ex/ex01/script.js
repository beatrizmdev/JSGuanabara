function contagem() {
    let início = document.getElementById('primeiro').value
    let fim = document.getElementById('segundo').value
    let passo = document.getElementById('terceiro').value
    let resultado = document.getElementById('res')
  
    if (início.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('ERRO! Faltam dados.')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = "<p>Contando:</p>"

        let i = Number(início)
        let f = Number(fim)
        let p= Number(passo)
        if(p<=0) {
            window.alert('Passo inválido! Considerando passo=1')
            p = 1
        }
        if(i<f) {
            for(let num=i; num<=f; num+=p) {
                resultado.innerHTML += `${num} \u{27A1} `
            }
        } else {
            for(let num=i; num>=f; num-=p) {
                resultado.innerHTML += `${num} \u{27A1} `
            }          
        }
        resultado.innerHTML +=`\u{1F3C1}`
    }
}
    

