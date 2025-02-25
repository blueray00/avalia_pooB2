export class ItemMagico {
  constructor(
    public nome: string,
    public poder: string,
    public tipo: 'Ataque' | 'Defesa',
    public dano?: number
  ) {}

  descrever(): string {
    if (this.tipo === 'Ataque' && this.dano !== undefined) {
      return `${this.nome} é uma arma de ataque com o poder de ${this.poder} e causa ${this.dano} de dano.`;
    } else {
      return `${this.nome} é um item de defesa com o poder de ${this.poder}.`;
    }
  }
}

