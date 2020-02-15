import { TestBed } from '@angular/core/testing';

import { InMemoryShowcasesService } from './in-memory-showcases.service';

describe('InMemoryShowcasesService', () => {
  let service: InMemoryShowcasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryShowcasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
