/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrReservacionService } from './ctrReservacion.service';

describe('Service: CtrReservacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrReservacionService]
    });
  });

  it('should ...', inject([CtrReservacionService], (service: CtrReservacionService) => {
    expect(service).toBeTruthy();
  }));
});
