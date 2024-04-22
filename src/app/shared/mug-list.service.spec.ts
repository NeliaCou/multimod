import { TestBed } from '@angular/core/testing';

import { MugListService } from './mug-list.service';

describe('MugListService', () => {
  let service: MugListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MugListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
