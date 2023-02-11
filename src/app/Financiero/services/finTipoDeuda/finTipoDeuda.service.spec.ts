/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinTipoDeudaService } from './finTipoDeuda.service';

describe('Service: FinTipoDeuda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinTipoDeudaService]
    });
  });

  it('should ...', inject([FinTipoDeudaService], (service: FinTipoDeudaService) => {
    expect(service).toBeTruthy();
  }));
});
