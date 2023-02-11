/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CtrUsuarioService } from './ctrUsuario.service';

describe('Service: CtrUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtrUsuarioService]
    });
  });

  it('should ...', inject([CtrUsuarioService], (service: CtrUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
