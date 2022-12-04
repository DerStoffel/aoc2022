// section has ID
// each elf range of IDs
// ranges overlap
// In how many assignment pairs does one range fully contain the other?

import { count } from ".";

describe('Check elves assignments', () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

    test('how many ranges fully container the other', () => {
        expect(count(input)).toBe(2);
    })
})