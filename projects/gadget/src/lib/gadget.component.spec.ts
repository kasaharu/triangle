import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetComponent } from './gadget.component';

describe('GadgetComponent', () => {
  let component: GadgetComponent;
  let fixture: ComponentFixture<GadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
