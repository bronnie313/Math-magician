import operate from './operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should return correct result after subtraction', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('multiplies two mumbers and returns result', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('divides two numbers and returns result', () => {
    expect(operate('6', '6', '÷')).toBe('1');
  });

  it('cant divide a number by zero', () => {
    expect(operate('4', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('handles calculations of modulo', () => {
    expect(operate('9', '2', '%')).toBe('1');
  });

  it('cant do modulo with Zero', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('it should return an Error for unknown operation', () => {
    expect(() => operate('2', '3', '&')).toThrow("Unknown operation '&'");
  });
});
