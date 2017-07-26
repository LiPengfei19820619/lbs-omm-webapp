import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdjnodeComponent } from './mod-adjnode.component';

describe('ModAdjnodeComponent', () => {
  let component: ModAdjnodeComponent;
  let fixture: ComponentFixture<ModAdjnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModAdjnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAdjnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
