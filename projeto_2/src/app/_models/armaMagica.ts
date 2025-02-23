import { ItemMagico } from "./itemMagico";

export class ArmaMagica extends ItemMagico{
  constructor(nome: string, poder: string, public dano: number) {
    super(nome, poder);
  }


  override descrever(): string {
    return `${this.nome} possui o poder de ${this.poder} e causa ${this.dano} de dano.`;
  }
}
