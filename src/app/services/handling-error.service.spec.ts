import { TestBed } from '@angular/core/testing';

import { HandlingErrorService } from './handling-error.service';

describe('HandlingErrorService', () => {
  let service: HandlingErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlingErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
