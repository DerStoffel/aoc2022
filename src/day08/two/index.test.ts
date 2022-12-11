import { calculateHighestScore } from ".";

describe('scenery', () => {
    test('highest scenic score', () => {
        const input = `30373
25512
65332
33549
35390`;
        expect(calculateHighestScore(input)).toBe(8)
    });
})