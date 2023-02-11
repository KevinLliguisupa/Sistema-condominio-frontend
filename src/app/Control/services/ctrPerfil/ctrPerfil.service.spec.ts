/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrPerfilService } from './ctrPerfil.service';

describe('Service: CtrPerfil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrPerfilService]
    });
  });

  it('should ...', inject([CtrPerfilService], (service: CtrPerfilService) => {
    expect(service).toBeTruthy();
  }));
});
