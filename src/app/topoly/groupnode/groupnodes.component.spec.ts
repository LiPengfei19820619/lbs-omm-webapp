import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupnodesComponent } from './groupnodes.component';

describe('GroupnodesComponent', () => {
  let component: GroupnodesComponent;
  let fixture: ComponentFixture<GroupnodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupnodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupnodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
