import { JumpwindowModule } from './jumpwindow.module';

describe('JumpwindowModule', () => {
  let jumpwindowModule: JumpwindowModule;

  beforeEach(() => {
    jumpwindowModule = new JumpwindowModule();
  });

  it('should create an instance', () => {
    expect(jumpwindowModule).toBeTruthy();
  });
});
