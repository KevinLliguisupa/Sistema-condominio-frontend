/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinIncidenciaService } from './finIncidencia.service';

describe('Service: FinIncidencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinIncidenciaService]
    });
  });

  it('should ...', inject([FinIncidenciaService], (service: FinIncidenciaService) => {
    expect(service).toBeTruthy();
  }));
});
