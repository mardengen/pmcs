import { Demo4Module } from './demo4.module';

describe('Demo4Module', () => {
  let demo4Module: Demo4Module;

  beforeEach(() => {
    demo4Module = new Demo4Module();
  });

  it('should create an instance', () => {
    expect(demo4Module).toBeTruthy();
  });
});
