import { expect } from "@jest/globals";
import analyzeArray from "../code/analyzeArray";

describe('analyzeArray', () => {
    test('analyzes an array correctly', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4, 
            min : 1, 
            max : 8, 
            length : 6
        })
    })

    test('analyzes an array with negative numbers correctly', () => {
        expect(analyzeArray([-2,-4,5,-3,9])).toEqual({
            average : 1,
            min : -4,
            max : 9,
            length : 5
        })
    })

    test('analyzes an array with only zeros accurately', () => {
        expect(analyzeArray([0,0,0,0])).toEqual({
            average : 0,
            min : 0,
            max : 0, 
            length : 4
        })
    })

    test('analyzes an array with only one value accurately', () => {
        expect(analyzeArray([32])).toEqual({
            average : 32,
            min : 32,
            max : 32, 
            length : 1
        })
    })

    test('analyzes an array with only two values accurately', () => {
        expect(analyzeArray([15,45])).toEqual({
            average : 30,
            min : 15,
            max : 45,
            length : 2
        })
    })
})