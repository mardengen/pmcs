import { Demo1Module } from './demo1.module';

describe('Demo1Module', () => {
  let demo1Module: Demo1Module;

  beforeEach(() => {
    demo1Module = new Demo1Module();
  });

  it('should create an instance', () => {
    expect(demo1Module).toBeTruthy();
  });
});
