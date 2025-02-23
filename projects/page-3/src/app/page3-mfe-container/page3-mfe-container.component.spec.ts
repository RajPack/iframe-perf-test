import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3MfeContainerComponent } from './page3-mfe-container.component';

describe('Page3MfeContainerComponent', () => {
  let component: Page3MfeContainerComponent;
  let fixture: ComponentFixture<Page3MfeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3MfeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3MfeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
