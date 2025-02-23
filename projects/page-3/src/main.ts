import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Page3MfeContainerComponent } from './app/page3-mfe-container/page3-mfe-container.component';

(async () => {
  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const page3mfe = createCustomElement(Page3MfeContainerComponent, {
    injector: app.injector,
  });

  customElements.define('page3-mfe', page3mfe);
})();
