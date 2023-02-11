/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinDeudaPagoService } from './finDeudaPago.service';

describe('Service: FinDeudaPago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinDeudaPagoService]
    });
  });

  it('should ...', inject([FinDeudaPagoService], (service: FinDeudaPagoService) => {
    expect(service).toBeTruthy();
  }));
});
