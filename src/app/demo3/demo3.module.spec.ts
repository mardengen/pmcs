import { Demo3Module } from './demo3.module';

describe('Demo3Module', () => {
  let demo3Module: Demo3Module;

  beforeEach(() => {
    demo3Module = new Demo3Module();
  });

  it('should create an instance', () => {
    expect(demo3Module).toBeTruthy();
  });
});
