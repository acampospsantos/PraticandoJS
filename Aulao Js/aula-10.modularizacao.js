function calculaMedia(notaA, notaB, notaC){
    let soma = notaA + notaB + notaC
    let media = soma/3
    return media
}

let calculo = calculaMedia(10, 4, 8)
console.log("Média é = " + calculo)

//Oq podemos aprender aqui: Modularização(chamada de função)