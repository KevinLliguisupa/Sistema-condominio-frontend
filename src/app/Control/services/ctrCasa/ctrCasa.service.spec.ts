/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrCasaService } from './ctrCasa.service';

describe('Service: CtrCasa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrCasaService]
    });
  });

  it('should ...', inject([CtrCasaService], (service: CtrCasaService) => {
    expect(service).toBeTruthy();
  }));
});
