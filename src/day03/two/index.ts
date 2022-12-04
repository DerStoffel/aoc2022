import { executeAndPrint, readLinesOfFile, sumArrayValues } from '../../util';
import { calculatePriorityByLetter } from '../util';

export function calculatePriority(input: string): number {
    const rucksacks = readLinesOfFile(input);
    const groups = [];
    while (rucksacks.length > 0)
        groups.push(rucksacks.splice(0, 3));
    
    const badgeLetters = groups.map(group => group[0].split('').find(letter => group[1].includes(letter) && group[2].includes(letter) ? letter : false)!);
    const priorities = calculatePriorityByLetter(badgeLetters);
    
    return sumArrayValues(priorities);

}

executeAndPrint('src/day03/input.txt', calculatePriority);
