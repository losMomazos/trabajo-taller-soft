import { TestBed, inject } from '@angular/core/testing';

import { CpuService } from './cpu.service';
import {Cpu} from '../Cpu';
import {Gpu} from '../Gpu';
import {Motherboard} from '../Motherboard';

describe('CpuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpuService]
    });
  });

  it('should be created', inject([CpuService], (service: CpuService) => {
    expect(service).toBeTruthy();
  }));
});
