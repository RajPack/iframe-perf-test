import { Component } from '@angular/core';
import { AppMenuComponent } from '../app-menu/app-menu.component';
import { hideHeaderIfInIframe } from '../utils/hide-iframe-header';

@Component({
  selector: 'lib-header',
  imports: [AppMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ngAfterViewInit() {
    hideHeaderIfInIframe();
  }
}
