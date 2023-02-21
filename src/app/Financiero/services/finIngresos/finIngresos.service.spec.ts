/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinIngresosService } from './finIngresos.service';

describe('Service: FinIngresos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinIngresosService]
    });
  });

  it('should ...', inject([FinIngresosService], (service: FinIngresosService) => {
    expect(service).toBeTruthy();
  }));
});
