import { TestBed } from '@angular/core/testing';

import { AppShellLibService } from './app-shell-lib.service';

describe('AppShellLibService', () => {
  let service: AppShellLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppShellLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
