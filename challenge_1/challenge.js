const numeros = [-100, -1, 511, 10000, 114585, 920, 225, 300, 35, 40, 845, 5100, 755, 6910, 65, -7470, 75, 85, 90, -95000]

const valuesMax = (numeros) => {

    let valueMax = 0

    let secondValueMax = 0

    for (let i = 0; i < numeros.length; i++) {
        if (i === 0) {
            valueMax = numeros[0]
        }
        if (numeros[i] > valueMax) {
            valueMax = numeros[i]
        }
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] !== valueMax)
            if (numeros[i] > secondValueMax) {
                secondValueMax = numeros[i]
            }
    }

    return [valueMax, secondValueMax]
}


console.log(valuesMax(numeros))