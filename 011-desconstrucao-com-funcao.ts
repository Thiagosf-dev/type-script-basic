// Técnica do Princípio da menor autoridade
let meuObjeto = {
   //id: 1,
   nome: "Abcde",
   idade: 30
};

function mostrarDecomposicao(objDecomposto: {
   id?: number,
   nome: string,
   idade: number
}): void {
   let {id = 0, nome, idade} = objDecomposto;
   alert(id);
   alert(nome);
   alert(idade);
};

mostrarDecomposicao(meuObjeto);
