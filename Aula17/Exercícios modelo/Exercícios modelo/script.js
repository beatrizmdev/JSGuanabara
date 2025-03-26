var lista = []

function adcselect(numero) { //arrumando o select
    let opcoes = document.getElementById("tab") 
    let item = document.createElement('option')
    if (opcoes.options[0].text === "Nenhum valor adicionado") {
        opcoes.innerHTML = ""    
    } 
    item.text = `Valor ${numero} foi adicionado.`
    opcoes.appendChild(item)   
}

function adicionando() { //apertando o botão de adicionar número
    let numero = document.getElementById("entrada").value

    const numeroEVazio = numero.length == 0
    if (numeroEVazio) {
        alert("Nenhum número foi adicionado!")
        return
    }

    const numEntre1E100 = numero < 1 || numero > 100
    if (numEntre1E100) {
        alert("O número deve estar entre 1 e 100!")
        return
    }

    for (let i = 0; i <= lista.length; i++) {
        if (lista[i] == numero) {
            alert("Valor já adicionado!")
            return
        }
    }
        
    lista.push(numero)
    adcselect(numero)
}


function finalizar() {
    if (lista.length === 0) {
        alert("Nenhum valor adicionado")
    } else {
    let textofim = document.getElementById("txtf")
    lista.sort()
    console.log("lista", lista)
    let tamanhoLista = lista.length
    let somaLista = 0    
    for (i = 0; i < lista.length; i++) {
        const valor = Number(lista[i])
        somaLista += valor
    }

    let mediaLista = somaLista/tamanhoLista

    textofim.innerHTML = `Ao todo temos ${tamanhoLista} números cadastrados.<br/>\n`
    textofim.innerHTML += `O maior valor informado foi ${lista[tamanhoLista-1]}.<br/>\n`
    textofim.innerHTML += `O menor valor informado foi ${lista[0]}.<br/>\n`
    textofim.innerHTML += `Somando todos os valores, temos ${somaLista}.<br/>\n`
    textofim.innerHTML += `A média dos valores digitados é ${mediaLista.toFixed(2)}.<br/>\n`
    console.log(textofim.innerHTML)
    }
}
