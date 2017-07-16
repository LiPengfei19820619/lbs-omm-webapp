import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjnodesComponent } from './adjnodes.component';

describe('AdjnodesComponent', () => {
  let component: AdjnodesComponent;
  let fixture: ComponentFixture<AdjnodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjnodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjnodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
