import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements AfterViewInit {
  public activeTab: string = 'inventory';

  ngAfterViewInit(): void {
    this.notifyIframeSizeChange();
  }

  notifyIframeSizeChange() {
    let message = {
      height: document.body.scrollHeight,
      width: document.body.scrollWidth,
    };

    // window.top refers to parent window
    window.top!.postMessage(message, '*');
  }

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
