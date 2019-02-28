import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnComponent } from './single-column.component';

describe('SingleColumnComponent', () => {
  let component: SingleColumnComponent;
  let fixture: ComponentFixture<SingleColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
