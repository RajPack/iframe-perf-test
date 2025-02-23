import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Page4MfeContainerComponent } from './app/page4-mfe-container/page4-mfe-container.component';

(async () => {
  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const page4mfe = createCustomElement(Page4MfeContainerComponent, {
    injector: app.injector,
  });

  customElements.define('page4-mfe', page4mfe);
})();
