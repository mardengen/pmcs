import { Demo6Module } from './demo6.module';

describe('Demo6Module', () => {
  let demo6Module: Demo6Module;

  beforeEach(() => {
    demo6Module = new Demo6Module();
  });

  it('should create an instance', () => {
    expect(demo6Module).toBeTruthy();
  });
});
