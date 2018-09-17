import { CounterStoreModule } from './counter-store.module';

describe('CounterStoreModule', () => {
  let counterStoreModule: CounterStoreModule;

  beforeEach(() => {
    counterStoreModule = new CounterStoreModule();
  });

  it('should create an instance', () => {
    expect(counterStoreModule).toBeTruthy();
  });
});
