import { Component } from '@angular/core';
import { AppMenuComponent } from '../app-menu/app-menu.component';

@Component({
  selector: 'lib-header',
  imports: [AppMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
