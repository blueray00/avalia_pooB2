import { Component } from '@angular/core';
import { ItemMagicoService } from '../../_services/itemMagicoService';
import { ItemMagico } from '../../_models/itemMagico';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  imports: [FormsModule],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {
  nome: string = '';
  poder: string = '';

  constructor(private itemMagicoService: ItemMagicoService) {}

  adicionar(): void {
    if (this.nome && this.poder) {
      const novoItem = new ItemMagico(this.nome, this.poder);
      this.itemMagicoService.adicionarItem(novoItem);
      this.nome = '';
      this.poder = '';
    }
  }
}
