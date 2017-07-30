import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityctrlPropertyComponent } from './add-securityctrl-property.component';

describe('AddSecurityctrlPropertyComponent', () => {
  let component: AddSecurityctrlPropertyComponent;
  let fixture: ComponentFixture<AddSecurityctrlPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecurityctrlPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecurityctrlPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
