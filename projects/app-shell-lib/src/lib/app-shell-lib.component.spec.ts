import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellLibComponent } from './app-shell-lib.component';

describe('AppShellLibComponent', () => {
  let component: AppShellLibComponent;
  let fixture: ComponentFixture<AppShellLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShellLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppShellLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
