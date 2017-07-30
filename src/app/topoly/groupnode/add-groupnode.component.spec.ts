import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupnodeComponent } from './add-groupnode.component';

describe('AddGroupnodeComponent', () => {
  let component: AddGroupnodeComponent;
  let fixture: ComponentFixture<AddGroupnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
