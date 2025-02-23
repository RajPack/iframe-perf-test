import { Routes } from '@angular/router';
import { Page1IframeComponent } from './page1-iframe/page1-iframe.component';
import { Page2IframeComponent } from './page2-iframe/page2-iframe.component';
import { loadMfe } from 'app-shell-lib';

export const routes: Routes = [
  {
    path: 'page1',
    component: Page1IframeComponent,
  },
  { path: 'page2', component: Page2IframeComponent },
  {
    path: 'page3',
    async loadComponent() {
      if (!customElements.get('page3-mfe')) {
        await loadMfe('http://localhost:4203/main.js');
      }
      return import('./page3-mfe/page3-mfe.component').then(
        (m) => m.Page3MFEComponent
      );
    },
  },
  {
    path: 'page4',
    async loadComponent() {
      if (!customElements.get('page4-mfe')) {
        await loadMfe('http://localhost:4204/main.js');
      }
      return import('./page4-mfe/page4-mfe.component').then(
        (m) => m.Page4MFEComponent
      );
    },
  },
  { path: '**', redirectTo: 'page1' },
];
