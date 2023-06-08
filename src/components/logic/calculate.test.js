import calculate from './calculate';

describe('calculate', () => {
  it('should returns total null for object when AC is pressed', () => {
    expect(calculate('{}', 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  it('should update the "next" value when the buttonName is a number', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '9')).toEqual({ total: '5', next: '29', operation: '+' });
  });

  it('should add a decimal point to the "next" value', () => {
    expect(calculate({ total: '4', next: '6', operation: null }, '.')).toEqual({ total: '4', next: '6.', operation: null });
  });
});
