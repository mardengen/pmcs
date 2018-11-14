import { AllSaleAModule } from './all-sale-a.module';

describe('AllSaleAModule', () => {
  let allSaleAModule: AllSaleAModule;

  beforeEach(() => {
    allSaleAModule = new AllSaleAModule();
  });

  it('should create an instance', () => {
    expect(allSaleAModule).toBeTruthy();
  });
});
