/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinPagoService } from './finPago.service';

describe('Service: FinPago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinPagoService]
    });
  });

  it('should ...', inject([FinPagoService], (service: FinPagoService) => {
    expect(service).toBeTruthy();
  }));
});
