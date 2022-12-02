import { findTopThreeCarriedCalories } from "./index";

describe('Top 3 elves with most calores', () => {
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

    test('Most carried calories', () => {
        const expected = 45000;
        const result = findTopThreeCarriedCalories(input);
    
        expect(result).toEqual(expected);
    });
});

