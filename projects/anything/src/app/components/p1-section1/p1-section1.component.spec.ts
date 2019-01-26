import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1Section1Component } from './p1-section1.component';

describe('P1Section1Component', () => {
  let component: P1Section1Component;
  let fixture: ComponentFixture<P1Section1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1Section1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
