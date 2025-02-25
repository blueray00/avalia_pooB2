import { Injectable } from '@angular/core';
import { ItemMagico } from '../_models/itemMagico';

@Injectable({
  providedIn: 'root'
})
export class ItemMagicoService {
  removerItem(index: number) {
    throw new Error('Method not implemented.');
  }
  private itensMagicos: ItemMagico[] = [];

  adicionarItem(item: ItemMagico) {
    this.itensMagicos.push(item);
  }

  listarItens(): ItemMagico[] {
    return this.itensMagicos;
  }
}



