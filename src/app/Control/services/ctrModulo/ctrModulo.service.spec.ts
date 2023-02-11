/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrModuloService } from './ctrModulo.service';

describe('Service: CtrModulo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrModuloService]
    });
  });

  it('should ...', inject([CtrModuloService], (service: CtrModuloService) => {
    expect(service).toBeTruthy();
  }));
});
