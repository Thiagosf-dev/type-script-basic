interface IAnimal {

   nome: string;
   idade: number;
   estaVivo: boolean;

   nascer(): void;
   crescer(): void;
   morrer(): void;
}