/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrAsignacionService } from './ctrAsignacion.service';

describe('Service: CtrAsignacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrAsignacionService]
    });
  });

  it('should ...', inject([CtrAsignacionService], (service: CtrAsignacionService) => {
    expect(service).toBeTruthy();
  }));
});
