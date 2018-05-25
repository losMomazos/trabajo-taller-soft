import { TestBed, inject } from '@angular/core/testing';

import { MotherService } from './mother.service';

describe('MotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotherService]
    });
  });

  it('should be created', inject([MotherService], (service: MotherService) => {
    expect(service).toBeTruthy();
  }));
});
