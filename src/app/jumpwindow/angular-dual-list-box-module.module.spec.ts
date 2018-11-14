import { AngularDualListBoxModuleModule } from './angular-dual-list-box-module.module';

describe('AngularDualListBoxModuleModule', () => {
  let angularDualListBoxModuleModule: AngularDualListBoxModuleModule;

  beforeEach(() => {
    angularDualListBoxModuleModule = new AngularDualListBoxModuleModule();
  });

  it('should create an instance', () => {
    expect(angularDualListBoxModuleModule).toBeTruthy();
  });
});
