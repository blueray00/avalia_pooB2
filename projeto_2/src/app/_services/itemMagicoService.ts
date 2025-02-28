import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemMagico } from '../_models/itemMagico';

@Injectable({ providedIn: 'root' })
export class ItemMagicoService {
  private itensSubject = new BehaviorSubject<ItemMagico[]>([]);
  itens$ = this.itensSubject.asObservable();

  adicionarItem(item: ItemMagico): void {
    const itensAtuais = this.itensSubject.value;
    this.itensSubject.next([...itensAtuais, item]);
  }

  removerItem(index: number): void {
    const itensAtuais = this.itensSubject.value;
    itensAtuais.splice(index, 1);
    this.itensSubject.next([...itensAtuais]);
  }
}
