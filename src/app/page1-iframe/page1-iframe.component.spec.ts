import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1IframeComponent } from './page1-iframe.component';

describe('Page1IframeComponent', () => {
  let component: Page1IframeComponent;
  let fixture: ComponentFixture<Page1IframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1IframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1IframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
