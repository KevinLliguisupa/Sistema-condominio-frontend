/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrReunionService } from './ctrReunion.service';

describe('Service: CtrReunion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrReunionService]
    });
  });

  it('should ...', inject([CtrReunionService], (service: CtrReunionService) => {
    expect(service).toBeTruthy();
  }));
});
