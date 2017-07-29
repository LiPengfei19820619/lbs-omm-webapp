import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNodegroupComponent } from './mod-nodegroup.component';

describe('ModNodegroupComponent', () => {
  let component: ModNodegroupComponent;
  let fixture: ComponentFixture<ModNodegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModNodegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModNodegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
