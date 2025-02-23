export class ItemMagico {
  constructor(public nome: string, public poder: string) {}

  descrever(): string {
    return `${this.nome} possui o poder de ${this.poder}.`;
  }
}
