let primeiroArray = [1, 2, 3];
let segundoArray = [5, 6, 7];

let juncao = [0, ...primeiroArray, 4, ...segundoArray];

let objeto = {
   nome: "Abcde",
}

let novoObjeto = {
   ...objeto,
   idade: 20,
}