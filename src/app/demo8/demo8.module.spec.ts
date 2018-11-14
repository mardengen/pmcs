import { Demo8Module } from './demo8.module';

describe('Demo8Module', () => {
  let demo8Module: Demo8Module;

  beforeEach(() => {
    demo8Module = new Demo8Module();
  });

  it('should create an instance', () => {
    expect(demo8Module).toBeTruthy();
  });
});
