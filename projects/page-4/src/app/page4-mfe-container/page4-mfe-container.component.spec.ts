import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4MfeContainerComponent } from './page4-mfe-container.component';

describe('Page4MfeContainerComponent', () => {
  let component: Page4MfeContainerComponent;
  let fixture: ComponentFixture<Page4MfeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page4MfeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page4MfeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
