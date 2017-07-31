import { TestBed, inject } from '@angular/core/testing';

import { SecurityctrlPropertyService } from './securityctrl-property.service';

describe('SecurityctrlPropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityctrlPropertyService]
    });
  });

  it('should be created', inject([SecurityctrlPropertyService], (service: SecurityctrlPropertyService) => {
    expect(service).toBeTruthy();
  }));
});
