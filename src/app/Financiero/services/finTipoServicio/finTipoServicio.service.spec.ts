/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinTipoServicioService } from './finTipoServicio.service';

describe('Service: FinTipoServicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinTipoServicioService]
    });
  });

  it('should ...', inject([FinTipoServicioService], (service: FinTipoServicioService) => {
    expect(service).toBeTruthy();
  }));
});
