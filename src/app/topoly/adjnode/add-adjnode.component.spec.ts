import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdjnodeComponent } from './add-adjnode.component';

describe('AddAdjnodeComponent', () => {
  let component: AddAdjnodeComponent;
  let fixture: ComponentFixture<AddAdjnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdjnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdjnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
