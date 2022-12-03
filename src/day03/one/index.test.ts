// rucksack has 2 compartments
// given type matches one of the compartments
// item type is defined by a single lowercase or uppercase letter
// first half compartment 1
// second half compartment 2
// 1 line on rucksack
// 1 character 1 item
// item types have priorities: 
//      Lowercase item types a through z have priorities 1 through 26.
//      Uppercase item types A through Z have priorities 27 through 52.
// Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import { calculatePriority } from ".";

describe('Listen up little elf', () => {
    const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    test('has priority', () => {
        expect(calculatePriority(input)).toBe(157);
    })
});