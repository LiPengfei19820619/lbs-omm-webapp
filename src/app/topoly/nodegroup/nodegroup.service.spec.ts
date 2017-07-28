import { TestBed, inject } from '@angular/core/testing';

import { NodegroupService } from './nodegroup.service';

describe('NodegroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodegroupService]
    });
  });

  it('should be created', inject([NodegroupService], (service: NodegroupService) => {
    expect(service).toBeTruthy();
  }));
});
