function mostrarErro(mensagem: string): never {
  throw new Error("Ocorreu um erro: " + mensagem);
}