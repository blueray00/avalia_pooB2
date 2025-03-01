import { Component, OnInit } from '@angular/core';
import { ItemMagicoService } from '../../_services/itemMagicoService';
import { ItemMagico } from '../../_models/itemMagico';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  dataSource = new MatTableDataSource<ItemMagico>([]);
  displayedColumns: string[] = ['nome', 'poder', 'tipo', 'dano', 'descricao', 'acoes'];
  subscription!: Subscription;

  constructor(private itemMagicoService: ItemMagicoService) {}

  ngOnInit() {
    this.subscription = this.itemMagicoService.itens$.subscribe(itens => {
      this.dataSource.data = itens;
    });
  }

  excluirItem(index: number): void {
    this.itemMagicoService.removerItem(index);
  }

  toggleFavorito(item: ItemMagico): void {
    item.favorito = !item.favorito;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

