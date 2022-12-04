import { executeAndPrint, readLinesOfFile, sumArrayValues } from '../../util';
import { calculatePriorityByLetter } from '../util';

export function calculatePriority(input: string): number {
    const rucksacks = readLinesOfFile(input);
    const rucksacksWithCompartments = rucksacks.map(rucksack => [rucksack.slice(0, rucksack.length/2), rucksack.slice(rucksack.length/2)]);
    const duplicateLetters = rucksacksWithCompartments.map(rucksack => rucksack[0].split('').find(letter => rucksack[1].includes(letter) ? letter : false)!);
    const priorities = calculatePriorityByLetter(duplicateLetters);

    return sumArrayValues(priorities);
}

executeAndPrint('src/day03/input.txt', calculatePriority);