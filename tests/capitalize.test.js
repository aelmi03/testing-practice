import capitalize from "../code/capitalize";

describe('capitalize', () => {

    test('capitalizes the first letter of the word correctly', () => {
        expect(capitalize('hello')).toBe('Hello');
    })

    test('capitalizes the first letter of the word correctly even if it\'s the last letter of the alphabet', () => {
        expect(capitalize('zoo')).toBe('Zoo');
    })

    test('doesn\'t affect a word that has a capitalized first letter', () => {
        expect(capitalize('Car')).toBe('Car');
    })
})