import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSecurityctrlPropertyComponent } from './mod-securityctrl-property.component';

describe('ModSecurityctrlPropertyComponent', () => {
  let component: ModSecurityctrlPropertyComponent;
  let fixture: ComponentFixture<ModSecurityctrlPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSecurityctrlPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSecurityctrlPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
