const Fraction = require('../fraction').Fraction;

test('Testing simplify I',()=>{
    let fr = new Fraction(4,2);
    expect(fr.getNumerator()).toBe(2);
    expect(fr.getDenominator()).toBe(1);
});

test('Testing simplify II',()=>{
    let fr = new Fraction(3,5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
});

