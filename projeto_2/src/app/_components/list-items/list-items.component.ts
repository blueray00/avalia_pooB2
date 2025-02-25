import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';  // Importando MatTableModule
import { MatIconModule } from '@angular/material/icon';    // Importando MatIconModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para animações do Material

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [MatTableModule, MatIconModule, BrowserAnimationsModule],  // Importando os módulos aqui
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  // Exemplo de dados
  itens = [
    { nome: 'Espada Flamejante', magia: 'Chama da destruição' },
    { nome: 'Elmo de Invisibilidade', magia: 'Invisibilidade' },
    { nome: 'Cloak of Time', magia: 'Controle do tempo' },
  ];

  displayedColumns: string[] = ['nome', 'magia', 'acao'];

  // Método para deletar item
  deletarItem(item: any): void {
    this.itens = this.itens.filter(i => i !== item);
  }
}

