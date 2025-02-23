import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4MFEComponent } from './page4-mfe.component';

describe('Page4MFEComponent', () => {
  let component: Page4MFEComponent;
  let fixture: ComponentFixture<Page4MFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page4MFEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page4MFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
