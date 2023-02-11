/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrAnuncioService } from './ctrAnuncio.service';

describe('Service: CtrAnuncio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrAnuncioService]
    });
  });

  it('should ...', inject([CtrAnuncioService], (service: CtrAnuncioService) => {
    expect(service).toBeTruthy();
  }));
});
