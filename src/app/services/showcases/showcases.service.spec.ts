import { TestBed } from '@angular/core/testing';

import { ShowcasesService } from './showcases.service';

describe('ShowcasesService', () => {
  let service: ShowcasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowcasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
