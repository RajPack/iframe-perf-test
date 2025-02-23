import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2IframeComponent } from './page2-iframe.component';

describe('Page2IframeComponent', () => {
  let component: Page2IframeComponent;
  let fixture: ComponentFixture<Page2IframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2IframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2IframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
