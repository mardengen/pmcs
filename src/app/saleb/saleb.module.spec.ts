import { SalebModule } from './saleb.module';

describe('SalebModule', () => {
  let salebModule: SalebModule;

  beforeEach(() => {
    salebModule = new SalebModule();
  });

  it('should create an instance', () => {
    expect(salebModule).toBeTruthy();
  });
});
