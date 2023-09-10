const numeros = [100, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 85, 90, 95]

const valuesMax = (numeros) => {


    let valueMax = 0

    let secondValueMax = 0

    for (let chave in numeros) {
        if (numeros[chave] > valueMax) {
            valueMax = numeros[chave]
        }
    }

    for (let chave in numeros) {
        if (numeros[chave] !== valueMax)
            if (numeros[chave] > secondValueMax) {
                secondValueMax = numeros[chave]
            }
    }

    return [valueMax, secondValueMax]
}


console.log(valuesMax(numeros))