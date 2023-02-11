/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrTipoAnuncioService } from './ctrTipoAnuncio.service';

describe('Service: CtrTipoAnuncio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrTipoAnuncioService]
    });
  });

  it('should ...', inject([CtrTipoAnuncioService], (service: CtrTipoAnuncioService) => {
    expect(service).toBeTruthy();
  }));
});
