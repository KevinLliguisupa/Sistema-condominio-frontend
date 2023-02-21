/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinReporteService } from './finReporte.service';

describe('Service: FinReporte', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinReporteService]
    });
  });

  it('should ...', inject([FinReporteService], (service: FinReporteService) => {
    expect(service).toBeTruthy();
  }));
});
