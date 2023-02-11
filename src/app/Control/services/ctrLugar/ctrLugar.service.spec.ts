/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrLugarService } from './ctrLugar.service';

describe('Service: CtrLugar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrLugarService]
    });
  });

  it('should ...', inject([CtrLugarService], (service: CtrLugarService) => {
    expect(service).toBeTruthy();
  }));
});
