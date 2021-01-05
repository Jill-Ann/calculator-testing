import { add, multiply, subtract, divide, setOperator, setInput } from './functions';

describe('calculator functions', () => {
  describe('adds', () => {
    test('4 and 5', () => {
      let result = add(4,5);
      expect(result).toEqual(9);
    })
  })
  describe('subtracts', () => {
    test('9 and 2', () => {
      let result = subtract(9,2);
      expect(result).toEqual(7);
    })
  })
  describe('multiplies', () => {
    test('10 and 2', () => {
      let result = multiply(10,2);
      expect(result).toEqual(20);
    })
  })
  describe('divides', () => {
    test('10 and 2', () => {
      let result = divide(10,2);
      expect(result).toEqual(5);
    })
  })
})

describe('sets inputs', () => {
  describe('setOperator', () => {
    test('division',() => {
      let result = setOperator('division');
      expect(result).toEqual('division');
    })
  })
})
