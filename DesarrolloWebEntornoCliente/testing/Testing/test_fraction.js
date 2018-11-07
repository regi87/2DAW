const Fraction = require('../fraction').Fraction;

test('Constructor error', ()=>{
    expect(()=>new Fraction(1.2,4)).toThrow(Error);
});

test('Constructor error II', ()=>{
    expect(()=>new Fraction(1,4.3)).toThrow(Error);
});

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
