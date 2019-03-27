interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  nascer(): void;
  crescer(): void;
  morrer(): void;
}

class Animal implements IAnimal {
  
  nome: string;
  idade: number;
  estaVivo: boolean;

  // construtor
  constructor(nome: string, idade?: number, vivo: boolean = true) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = vivo;
  };

  nascer(): void {
    if(this.estaVivo) console.log("O animal nasceu");
  }

  crescer(): void {
    this.idade++;
   console.log("O animal cresceu");
  }

  morrer(): void {
    this.estaVivo = false;
   console.log("O animal morreu");
  }
}

let cachorro: Animal = new Animal("Tótó", 3);
cachorro.nascer();
cachorro.estaVivo = true;
cachorro.crescer();
cachorro.morrer();