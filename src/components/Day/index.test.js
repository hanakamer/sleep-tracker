function sum(a, b) {
  if (a < 0) {
    return 'ERROR!';
  }
  return a + b;
}

sum(3, 4); // 7

// JEST
describe('sum()', () => {
  it('should add sum of two values', () => {
    // write your test....
    const result = sum(3, 4);
    const outcome = 7;

    expect(result).toBe(outcome);
  });

  it('should return errror, given negative numbers', () => {
    expect(sum(-3, 4)).toBe('ERROR!');
  });
});
