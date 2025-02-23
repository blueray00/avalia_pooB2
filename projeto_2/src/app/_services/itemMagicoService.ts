import { Injectable } from '@angular/core';
import { ItemMagico } from '../_models/itemMagico';
import { Inventario } from '../_models/inventario';

@Injectable({
  providedIn: 'root'
})
export class ItemMagicoService {
  private inventario = new Inventario();

  adicionarItem(item: ItemMagico): void {
    this.inventario.adicionarItem(item);
  }

  listarItens(): ItemMagico[] {
    return this.inventario.listarItens();
  }
}

