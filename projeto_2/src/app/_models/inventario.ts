import { ItemMagico } from "./itemMagico";

export class Inventario {
  private itens: ItemMagico[] = [];

  adicionarItem(item: ItemMagico): void {
    this.itens.push(item);
  }

  listarItens(): ItemMagico[] {
    return this.itens;
  }
}
