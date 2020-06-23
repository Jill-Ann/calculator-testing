import { multiply } from './functions';
// set-up for test
describe('calculator functions', () => {
  it('multiplies', () => {
    let result = multiply(1,2);
    expect(result).toEqual(2);
    result = multiply(2,2);
    expect(result).toEqual(4);
  });
})
