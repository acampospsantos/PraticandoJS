let lista = ["Arroz", "Feijão", "Carne", "Azeite", "Pão"]

lista.map((item) => { //escrevi a variável 'item', mas pode ser qualquer nome --> é uma representação do item da vez
    console.log(item)
})

let listaNotas = [8, 9.5, 4, 10, 6]

listaNotas.map((itemGenerico) => {
    let numero = itemGenerico + 1
    console.log(numero)
})

//Essa funcionalidade é muito boa para percorrer todo o array

//lista.length --> o método length retorna a quantidade de elementos do array.. nesse caso são 5
console.log(lista.length)