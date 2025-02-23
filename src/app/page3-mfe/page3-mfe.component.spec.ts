import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3MFEComponent } from './page3-mfe.component';

describe('Page3MFEComponent', () => {
  let component: Page3MFEComponent;
  let fixture: ComponentFixture<Page3MFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3MFEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3MFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
