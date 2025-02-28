import { Component, OnInit } from '@angular/core';
import { ItemMagicoService } from '../../_services/itemMagicoService';
import { ItemMagico } from '../../_models/itemMagico';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  itens: ItemMagico[] = [];
  displayedColumns: string[] = ['nome', 'magia', 'acoes'];

  constructor(private itemMagicoService: ItemMagicoService) {}

  ngOnInit(): void {
    this.itens = this.itemMagicoService.listarItens();
  }

  removerItem(item: ItemMagico): void {
    this.itens = this.itens.filter(i => i !== item);
  }
}
