import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingComponent } from './reading.component';

describe('ReadingComponent', () => {
  let component: ReadingComponent;
  let fixture: ComponentFixture<ReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
