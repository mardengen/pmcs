import { SalefileModule } from './salefile.module';

describe('SalefileModule', () => {
  let salefileModule: SalefileModule;

  beforeEach(() => {
    salefileModule = new SalefileModule();
  });

  it('should create an instance', () => {
    expect(salefileModule).toBeTruthy();
  });
});
