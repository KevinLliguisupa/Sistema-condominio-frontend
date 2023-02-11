/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinGastosService } from './finGastos.service';

describe('Service: FinGastos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinGastosService]
    });
  });

  it('should ...', inject([FinGastosService], (service: FinGastosService) => {
    expect(service).toBeTruthy();
  }));
});
