import { zoo } from './zoo.js';

describe('zoo', () => {
  it('should work', () => {
    // expect(typeof zoo()).toBe('string');
    // expect(zoo()).toBe('zoo');
    expect(zoo()).toMatch(/^\[ZOO\] \w+ says \w+!$/);
  });
});
