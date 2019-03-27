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

  nascer(): void {
     console.log("O animal nasceu");
  }

  crescer(): void {
   console.log("O animal cresceu");
  }

  morrer(): void {
   console.log("O animal morreu");
  }
}

let cachorro: Animal = new Animal();
cachorro.nascer();
cachorro.nome = "Tótó";
cachorro.idade = 3;
cachorro.estaVivo = true;
cachorro.crescer();
console.log(cachorro);
cachorro.morrer();
