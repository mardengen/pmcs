import { Demo7Module } from './demo7.module';

describe('Demo7Module', () => {
  let demo7Module: Demo7Module;

  beforeEach(() => {
    demo7Module = new Demo7Module();
  });

  it('should create an instance', () => {
    expect(demo7Module).toBeTruthy();
  });
});
