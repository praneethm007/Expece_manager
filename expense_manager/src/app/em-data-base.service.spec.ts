import { TestBed } from '@angular/core/testing';

import { EmDataBaseService } from './em-data-base.service';

describe('EmDataBaseService', () => {
  let service: EmDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
