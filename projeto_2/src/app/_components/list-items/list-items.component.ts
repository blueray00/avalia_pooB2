import { Component } from '@angular/core';
import { ItemMagicoService } from '../../_services/itemMagicoService';
import { ItemMagico } from '../../_models/itemMagico';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itens: ItemMagico[] = [];

  constructor(private itemMagicoService: ItemMagicoService) {}

  ngOnInit(): void {
    this.itens = this.itemMagicoService.listarItens();
  }
}
