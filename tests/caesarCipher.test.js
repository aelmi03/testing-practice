import caesarCipher from "../code/caesarCipher";

describe('caesar cipher', () => {
    test('works with a shift of 1', () => {
        expect(caesarCipher('this is the first test', 1)).toBe('uijt jt uif gjstu uftu');
    })

    test('works with a shift of 8', () => {
        expect(caesarCipher('i went to the park', 8)).toBe('q emvb bw bpm xizs');
    })

    test('works with a shift of 25', () => {
        expect(caesarCipher('i like to play basketball', 25)).toBe('h khjd sn okzx azrjdsazkk');
    })

    test('works with no shift', () => {
        expect(caesarCipher('rollercoasters are fun', 0)).toBe('rollercoasters are fun');
    })

    test('works with two letters words', () => {
        expect(caesarCipher('to', 2)).toBe('vq');
    })

    test('works with one letter', () => {
        expect(caesarCipher('a',5)).toBe('f');
    })

    test('works with uppercase letters', () => {
        expect(caesarCipher('HELLO PEOPLE', 6)).toBe('NKRRU VKUVRK');
    })

    test('works with a mix of uppercase and lowercase letters', () => {
        expect(caesarCipher('tHe WeAtHer Is NiCe', 3)).toBe('wKh ZhDwKhu Lv QlFh');
    })

    test('works with an empty string', () => {
        expect(caesarCipher('')).toBe('');
    })

    test('if shift is greather than 25 it throws an error', () => { 
        expect(() => caesarCipher('hello',26)).toThrow(new Error('There are only 26 letters in the alphabet the max shift is 25 letters'));
    })

    test('if string contains numbers or anything other than letters and spaces it throws an error', () => {
        expect(() => caesarCipher('land123!', 5)).toThrow(new Error('String must only contain spaces or letters'));
    })
})