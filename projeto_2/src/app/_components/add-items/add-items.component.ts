import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemMagicoService } from '../../_services/itemMagicoService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-items',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  formItemMagico: FormGroup;

  constructor(private fb: FormBuilder, private itemMagicoService: ItemMagicoService) {
    this.formItemMagico = this.fb.group({
      nome: ['', Validators.required],
      poder: ['', Validators.required],
      tipo: ['', Validators.required],
      dano: [null], // Só será preenchido se for tipo "ataque"
      descricao: ['', Validators.required]
    });

    // Se mudar o tipo para defesa, zera o dano
    this.formItemMagico.get('tipo')?.valueChanges.subscribe(tipo => {
      if (tipo === 'defesa') {
        this.formItemMagico.get('dano')?.reset();
      }
    });
  }

  adicionarItem() {
    if (this.formItemMagico.valid) {
      const novoItem = this.formItemMagico.value;
      this.itemMagicoService.adicionarItem(novoItem);
      this.formItemMagico.reset(); // Limpa o formulário após adicionar
    }
  }
}
