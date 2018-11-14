import { Demo2Module } from './demo2.module';

describe('Demo2Module', () => {
  let demo2Module: Demo2Module;

  beforeEach(() => {
    demo2Module = new Demo2Module();
  });

  it('should create an instance', () => {
    expect(demo2Module).toBeTruthy();
  });
});
