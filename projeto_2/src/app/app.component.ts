import { Component } from '@angular/core';
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { AddItemsComponent } from './_components/add-items/add-items.component';
import { ListItemsComponent } from "./_components/list-items/list-items.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, AddItemsComponent, ListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_2';
}
