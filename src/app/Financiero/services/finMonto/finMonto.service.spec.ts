/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinMontoService } from './finMonto.service';

describe('Service: FinMonto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinMontoService]
    });
  });

  it('should ...', inject([FinMontoService], (service: FinMontoService) => {
    expect(service).toBeTruthy();
  }));
});
