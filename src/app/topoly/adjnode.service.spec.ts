import { TestBed, inject } from '@angular/core/testing';

import { AdjnodeService } from './adjnode.service';

describe('AdjnodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjnodeService]
    });
  });

  it('should be created', inject([AdjnodeService], (service: AdjnodeService) => {
    expect(service).toBeTruthy();
  }));
});
