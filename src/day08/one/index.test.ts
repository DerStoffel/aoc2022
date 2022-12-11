import { getVisibleTrees } from ".";

describe('visible trees', () => {
    test('how many trees are visible', () => {
        const input = `30373
25512
65332
33549
35390`;
        expect(getVisibleTrees(input)).toBe(21);
    })
})