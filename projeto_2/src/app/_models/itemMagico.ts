export class ItemMagico {
  constructor(
    public nome: string,
    public poder: string,
    public tipo: 'Ataque' | 'Defesa',
    public dano?: number,
    public favorito: boolean = false
  ) {}
}

