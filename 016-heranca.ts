interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  nascer(): void;
  crescer(): void;
  morrer(): void;
}

class Animal implements IAnimal {
  
  private _nome: string;
  private _idade: number;
  private _estaVivo: boolean;

  // construtor
  constructor(nome: string, idade?: number, vivo: boolean = true) {
    this._nome = nome;
    this._idade = idade;
    this._estaVivo = vivo;
  };

  nascer(): void {
    if(this._estaVivo) console.log("O animal nasceu");
  }

  crescer(): void {
    this._idade++;
   console.log("O animal cresceu");
  }

  morrer(): void {
    this._estaVivo = false;
   console.log("O animal morreu");
  }
  
  //setters
  set idade(novaIdade: number) {
    if(!novaIdade || novaIdade < 0) throw new Error("Idade inválida");

    this._idade = novaIdade;
    this._estaVivo = true;
  }

  set nome(novoNome: string) {
    if(!novoNome) throw new Error("Nome inválido");

    this._nome = novoNome;
    this._estaVivo = true;
  }

  // getters
  get estaVivo(): boolean {
    return this._estaVivo;
  }

  get idade(): number {
    return this._idade;
  }

  get nome(): string {
    return this._nome;
  }

}

class Cachorro extends Animal {
  
  latir(): void {
    alert("O cachorro latiu");
  }

}

let cachorro: Cachorro = new Cachorro("Tótó", 3);
cachorro.nascer();
alert(cachorro.estaVivo);

alert(cachorro.idade);
cachorro.idade = 5;
alert(cachorro.idade);

alert(cachorro.nome);
cachorro.nome = "Novo Nome do Tótó";
alert(cachorro.nome);

cachorro.crescer();
alert(cachorro.idade);

cachorro.latir();

cachorro.morrer();
alert(cachorro.estaVivo);