/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinEgresosServiciosService } from './finEgresosServicios.service';

describe('Service: FinEgresosServicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinEgresosServiciosService]
    });
  });

  it('should ...', inject([FinEgresosServiciosService], (service: FinEgresosServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
