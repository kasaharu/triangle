import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingPageComponent } from './counting-page.component';

describe('CountingPageComponent', () => {
  let component: CountingPageComponent;
  let fixture: ComponentFixture<CountingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
