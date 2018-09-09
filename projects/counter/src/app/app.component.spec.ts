import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './root-store/counter/counter.reducers';

import { AppComponent } from './app.component';
import { CountingPageComponent } from './components/counting-page/counting-page.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CountingPageComponent,
      ],
      imports: [
        StoreModule.forRoot({ count: counterReducer }),
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'cnt'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cnt');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cnt!');
  }));
});
