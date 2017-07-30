import { TestBed, inject } from '@angular/core/testing';

import { GroupnodeService } from './groupnode.service';

describe('GroupnodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupnodeService]
    });
  });

  it('should be created', inject([GroupnodeService], (service: GroupnodeService) => {
    expect(service).toBeTruthy();
  }));
});
