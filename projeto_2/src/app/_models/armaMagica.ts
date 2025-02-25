import { ItemMagico } from "./itemMagico";

export class ArmaMagica extends ItemMagico {
  constructor(nome: string, poder: string, dano: number) {
    super(nome, poder, 'Ataque', dano);
  }

  override descrever(): string {
    return `${this.nome} é uma arma mágica com o poder de ${this.poder} e causa ${this.dano} de dano.`;
  }
}


