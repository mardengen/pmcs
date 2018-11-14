import { Demo5Module } from './demo5.module';

describe('Demo5Module', () => {
  let demo5Module: Demo5Module;

  beforeEach(() => {
    demo5Module = new Demo5Module();
  });

  it('should create an instance', () => {
    expect(demo5Module).toBeTruthy();
  });
});
