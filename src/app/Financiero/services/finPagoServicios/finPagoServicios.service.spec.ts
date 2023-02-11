/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinPagoServiciosService } from './finPagoServicios.service';

describe('Service: FinPagoServicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinPagoServiciosService]
    });
  });

  it('should ...', inject([FinPagoServiciosService], (service: FinPagoServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
