import { SaleaModule } from './salea.module';

describe('SaleaModule', () => {
  let saleaModule: SaleaModule;

  beforeEach(() => {
    saleaModule = new SaleaModule();
  });

  it('should create an instance', () => {
    expect(saleaModule).toBeTruthy();
  });
});
