import reverseString from "../code/reverseString";

describe('reverseString', () => {
   
    test('reverses a word correctly', () => {
        expect(reverseString('rollercoaster')).toBe('retsaocrellor');
    })
   
    test('works with three letter words', () => {
        expect(reverseString('the')).toBe('eht');
    })

    test('works with two letter words', () => {
        expect(reverseString('hi')).toBe('ih');
    })

    test('doesn\'t change the arguement if given a one letter word', () => {
        expect(reverseString('a')).toBe('a');
    })

    test('does not break the function if given an empty string', () => {
        expect(reverseString('')).toBe('');
    })
})