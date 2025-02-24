import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page3-mfe-container',
  imports: [CommonModule],
  templateUrl: './page3-mfe-container.component.html',
  styleUrl: './page3-mfe-container.component.css',
})
export class Page3MfeContainerComponent {
  public activeTab: string = 'inventory';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
