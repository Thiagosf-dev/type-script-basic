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
  protected _estaVivo: boolean;

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
    if(this._estaVivo) this._estaVivo = !this._estaVivo;
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
  
  private _qtdLatidos: number = 0;

  latir(): void {
    if(this._qtdLatidos > 3) this._estaVivo = false;
    else alert("O cachorro latiu");
  }

}

let c: Animal = new Cachorro("Tótó", 3);
c.nascer();
alert(c.estaVivo);

alert(c.idade);
c.idade = 5;
alert(c.idade);

alert(c.nome);
c.nome = "Novo Nome do Tótó";
alert(c.nome);

c.crescer();
alert(c.idade);

c.latir();

c.morrer();
alert(c.estaVivo);