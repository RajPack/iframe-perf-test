import { Component } from '@angular/core';
import { hideHeaderIfInIframe } from '../utils/hide-iframe-header';

@Component({
  selector: 'lib-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  ngAfterViewInit() {
    hideHeaderIfInIframe();
  }
}
