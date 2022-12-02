import { findMostCaloriesCarriedByAnElf } from "./index";

describe('Elves with most calores', () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

 /*   test('String converts to sums', () => {
        const expected = [6000, 4000, 11000, 24000, 10000];
        const result = stringToSum(input);
    
        expect(result).toEqual(expected);
    }); */
    
    test('Most carried calories', () => {
        const expected = 24000;
        const result = findMostCaloriesCarriedByAnElf(input);
    
        expect(result).toEqual(expected);
    });
});

