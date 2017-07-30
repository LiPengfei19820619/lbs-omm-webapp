import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodegroupComponent } from './add-nodegroup.component';

describe('AddNodegroupComponent', () => {
  let component: AddNodegroupComponent;
  let fixture: ComponentFixture<AddNodegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNodegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNodegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
