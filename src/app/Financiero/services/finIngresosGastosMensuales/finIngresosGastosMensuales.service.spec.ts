/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinIngresosGastosMensualesService } from './finIngresosGastosMensuales.service';

describe('Service: FinIngresosGastosMensuales', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinIngresosGastosMensualesService]
    });
  });

  it('should ...', inject([FinIngresosGastosMensualesService], (service: FinIngresosGastosMensualesService) => {
    expect(service).toBeTruthy();
  }));
});
