import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodegroupsComponent } from './nodegroups.component';

describe('NodegroupsComponent', () => {
  let component: NodegroupsComponent;
  let fixture: ComponentFixture<NodegroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodegroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodegroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
