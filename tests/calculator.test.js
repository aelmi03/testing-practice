import calculator from "../code/calculator";

describe('calculator', () => {
    test('adds numbers correctly', () => {
        expect(calculator.add(5,3)).toBe(8);
    })

    test('adds negative numbers correctly', () => {
        expect(calculator.add(-5,-8)).toBe(-13);
    })

    test('adds zero to the number correctly', () => {
        expect(calculator.add(13,0)).toBe(13);
    })

    test('subtracts numbers correctly', () => {
        expect(calculator.subtract(13,9)).toBe(4);
    })

    test('subtracts negative numbers correctly', () => {
        expect(calculator.subtract(-5,-10)).toBe(5);
    })

    test('substracts zero to the number correctly', () => {
        expect(calculator.subtract(31,0)).toBe(31);
    })

    test('multiplies numbers correctly', () => {
        expect(calculator.multiply(15,3)).toBe(45);
    })

    test('multiplies a number by zero correctly', () => {
        expect(calculator.multiply(54,0)).toBe(0);
    })

    test('multiplies negative numbers correctly', () => {
        expect(calculator.multiply(-10,5)).toBe(-50);
    })

    test('divides numbers correctly', () => {
        expect(calculator.divide(32,4)).toBe(8);
    })

    test('Throws an error whenever a zero is the second parameter', () => {
        expect(() => {
            calculator.divide(10,0)}
        ).toThrow(new Error('Number cannot be divided by 0'));
    });

    test('divides a 0 by a number correctly if zero is the first parameter', () => {
        expect(calculator.divide(0,20)).toBe(0);
    })

    test('divides by a negative number correctly', () => {
        expect(calculator.divide(-5,10)).toBe(-0.5);
    })

})