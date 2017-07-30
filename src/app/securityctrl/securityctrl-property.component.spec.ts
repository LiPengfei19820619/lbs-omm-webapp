import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityctrlPropertyComponent } from './securityctrl-property.component';

describe('SecurityctrlPropertyComponent', () => {
  let component: SecurityctrlPropertyComponent;
  let fixture: ComponentFixture<SecurityctrlPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityctrlPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityctrlPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
