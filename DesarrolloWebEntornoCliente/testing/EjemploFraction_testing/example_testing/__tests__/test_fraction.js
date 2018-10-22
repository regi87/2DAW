const Fraction = require('../fraction').Fraction;

test('Constructor error', () => {
    expect(() => new Fraction(1.2, 4)).toThrow(Error);
});

test('Constructor error II', () => {
    expect(() => new Fraction(1, 4.3)).toThrow(Error);
});

test('Testing simplify I', () => {
    let fr = new Fraction(4, 2);
    expect(fr.getNumerator()).toBe(2);
    expect(fr.getDenominator()).toBe(1);
});

test('Testing simplify II', () => {
    let fr = new Fraction(3, 5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
});

//común divisor de dos números es el mínimo posible 1
test('Testing mcd el mínimo posible 1', () => {
    expect(Fraction.mcd(4, 3)).toBe(1);
});

//Desarrolla un caso de test para el caso en el cual el máximo común divisor de dos números es el 2, y por
//tanto es el caso inicial del bucle dentro de la función
test('Testing mcd de dos números es el 2', () => {
    expect(Fraction.mcd(22, 30)).toBe(2);
});
//el caso en el cual el máximo común divisor de dos números es
//uno de los dos parámetros de la función
test('Testing mcd de dos números es uno de los dos parámetros', () => {
    expect(Fraction.mcd(3, 9)).toBe(3);
    expect(Fraction.mcd(9, 3)).toBe(3);
});
//Desarrolla un caso de test para el caso en el cual el máximo común divisor está entre 2 y 
//uno de los dos parámetros de la función (no incluídos)
test('Testing mcd está entre 2 y 1 de los dos parámetros', () => {
    expect(Fraction.mcd(6, 9)).toBe(3);
});
//Desarrolla un caso de test para el caso excepcional en el cual el primer parámetro no es un entero. 
//Se debería lanzar un error. Para probar que se lanza un error.
test('Testing mcd el primer parámetro no es un número entero', () => {
    expect(() => Fraction.mcd(1.5, 5)).toThrowError(Error);
    //2º caso
    expect(() => Fraction.mcd(2, 5.8)).toThrowError(Error);
});

//MCM
//Desarrolla un caso de test para probar el caso cuando el
//mínimo común múltiplo es uno de los dos parámetros.
test('Testing mcm cuando el mcm es uno de los parámetros', () => {
    expect(Fraction.mcm(2, 8)).toBe(8);
});

//Desarrolla un caso de test para probar el caso en el cual el
//mínimo común múltiplo es la multiplicación de ambos números.
test('Testing mcm es la multiplicación de ambos números', () => {
    expect(Fraction.mcm(1, 4)).toBe(4);
});

//Desarrolla un caso de test para probar el caso en el cual el 
//mínimo común múltiplo está entre el máximo de los dos
//parámetros y la multiplicación de ambos (no incluidos)
test('Testing mcm es la multiplicación de ambos números', () => {
    expect(Fraction.mcm(2, 6)).toBe(6);
});

//Desarrolla un caso de test para probar el caso especial donde el primer parámetro no es un entero
test('Testing mcm es la multiplicación de ambos números', () => {
    expect(() => Fraction.mcm(1.5, 5)).toThrowError(Error);
});

//Desarrolla un caso de test para probar el caso especial donde
//el segundo parámetro no es un enterotest('Testing mcm es la multiplicación de ambos números', () => {
test('Testing mcm el segundo parámetro no es un número entero', () => {
    expect(() => Fraction.mcm(1, 5.5)).toThrowError(Error);
});

//ADD
//Desarrolla un caso de test para el caso en el cual el parámetro pasado como valor es un entero
test('Testing add el parámetro pasado como valor es un entero', () => {
    expect(() => Fraction.add(5)).toThrowError(Error);
});
//Desarrolla un caso de test para el caso en el cual el parámetro
//proporcionado es otra fracción.
test('Testing add el parámetro pasado como valor es una fracción', () => {
    let fraction1 = new Fraction(1,3);
    let fraction2 = new Fraction (1,2);
    expect(fraction1.add(fraction2).getNumerator()).toBe(5);
    expect(fraction1.add(fraction2).getDenominator()).toBe(6);
});
//Desarrolla un caso de test para el escenario donde el
//parámetro proporcionado no es una fracción ni un entero
test('Testing add el parámetro pasado como valor no es ni un entero ni una fracción', () => {
    expect(() => Fraction.add("hola")).toThrowError(Error);
});

//TEST MULTIPLICACIÓN
//Desarrolla un caso de test para el caso en el cual el parámetro pasado como valor es un entero
test('Testing multiply el parámetro pasado como valor es un entero', () => {
    expect(() => Fraction.multiply(5)).toThrowError(Error);
});

//Desarrolla un caso de test para el caso en el cual el parámetro
//proporcionado es otra fracción.
test('Testing multiply el parámetro pasado como valor es una fracción', () => {
    let fraction1 = new Fraction(1,3);
    let fraction2 = new Fraction (1,2);
    expect(fraction1.multiply(fraction2).getNumerator()).toBe(1);
    expect(fraction1.multiply(fraction2).getDenominator()).toBe(6);
});

//Desarrolla un caso de test para el escenario donde el
//parámetro proporcionado no es una fracción ni un entero
test('Testing multiply el parámetro pasado como valor no es ni un entero ni una fracción', () => {
    expect(() => Fraction.multiply("hola")).toThrowError(Error);
});

//TEST DIVISIÓN
//Desarrolla un caso de test para el caso en el cual el parámetro pasado como valor es un entero
test('Testing divide el parámetro pasado como valor es un entero', () => {
    expect(() => Fraction.divide(5)).toThrowError(Error);
});

//Desarrolla un caso de test para el caso en el cual el parámetro
//proporcionado es otra fracción.
test('Testing divide el parámetro pasado como valor es una fracción', () => {
    let fraction1 = new Fraction(1,3);
    let fraction2 = new Fraction (1,2);
    expect(fraction1.divide(fraction2).getNumerator()).toBe(2);
    expect(fraction1.divide(fraction2).getDenominator()).toBe(3);
});

//Desarrolla un caso de test para el escenario donde el
//parámetro proporcionado no es una fracción ni un entero
test('Testing divide el parámetro pasado como valor no es ni un entero ni una fracción', () => {
    expect(() => Fraction.divide("hola")).toThrowError(Error);
});

//TEST RESTA
//Desarrolla un caso de test para el caso en el cual el parámetro pasado como valor es un entero
test('Testing minus el parámetro pasado como valor es un entero', () => {
    expect(() => Fraction.minus(5)).toThrowError(Error);
});

//Desarrolla un caso de test para el caso en el cual el parámetro
//proporcionado es otra fracción.
test('Testing minus el parámetro pasado como valor es una fracción', () => {
    let fraction1 = new Fraction(1,3);
    let fraction2 = new Fraction (1,2);
    expect(fraction1.minus(fraction2).getNumerator()).toBe(-1);
    expect(fraction1.minus(fraction2).getDenominator()).toBe(6);
});

//Desarrolla un caso de test para el escenario donde el
//parámetro proporcionado no es una fracción ni un entero
test('Testing minus el parámetro pasado como valor no es ni un entero ni una fracción', () => {
    expect(() => Fraction.minus("hola")).toThrowError(Error);
});