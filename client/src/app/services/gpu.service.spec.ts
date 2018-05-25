import { TestBed, inject } from '@angular/core/testing';

import { GpuService } from './gpu.service';

describe('GpuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpuService]
    });
  });

  it('should be created', inject([GpuService], (service: GpuService) => {
    expect(service).toBeTruthy();
  }));
});
