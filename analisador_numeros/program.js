let num = document.querySelector('input#n1')

let sel = document.querySelector('select#lista')

let res = document.querySelector('div#res')

let lista = []

function isNumber(n) {
    if(Number(n) > 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) > -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, lista)) {
        lista.push(Number(num.value))

        let add = document.createElement('option')
        add.text = `O valor ${num.value} foi adicionado!`
        sel.appendChild(add)
        
    }else{
        alert(`[Error] número inválido ou já existente na lista`)
    }

    num.value = '' //limpa a caixa de texto num
    num.focus() //mantem a selecao em num
    res.innerHTML = ''
}

function finalizar(){

    let quant = lista.length

    let maior = lista[0]
    let menor = lista[0]

    let soma = 0
    let media = 0

    for(let pos in lista){
        //se maior
        if(lista[pos] > maior){
            maior = lista[pos]
        }
         //se menor
        else if(lista[pos] < menor){
            menor = lista[pos]
        }
        soma += lista[pos]
    }
    media = soma / quant


    res.innerHTML = `<p>Total de numeros cadastrados é: ${quant}</p>`
    res.innerHTML += `<p>Maior numero cadastrado é: ${maior}</p>`
    res.innerHTML += `<p>Menor numero cadastrado é: ${menor}</p>`
    res.innerHTML += `<p>Soma dos numeros cadastrados é: ${soma}</p>`
    res.innerHTML += `<p>Média dos numeros cadastrados é: ${media.toFixed(1)}</p>`
}