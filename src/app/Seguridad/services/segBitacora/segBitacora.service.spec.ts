/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SegBitacoraService } from './segBitacora.service';

describe('Service: SegBitacora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegBitacoraService]
    });
  });

  it('should ...', inject([SegBitacoraService], (service: SegBitacoraService) => {
    expect(service).toBeTruthy();
  }));
});
