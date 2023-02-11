/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinDeudaService } from './finDeuda.service';

describe('Service: FinDeuda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinDeudaService]
    });
  });

  it('should ...', inject([FinDeudaService], (service: FinDeudaService) => {
    expect(service).toBeTruthy();
  }));
});
