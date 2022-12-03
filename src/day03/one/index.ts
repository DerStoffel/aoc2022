import * as fs from 'fs';

export function calculatePriority(input: string): number {
    const rucksacks = input.split('\n');
    const rucksacksWithCompartments = rucksacks.map(rucksack => [rucksack.slice(0, rucksack.length/2), rucksack.slice(rucksack.length/2)]);
    const duplicateLetters = rucksacksWithCompartments.map(rucksack => rucksack[0].split('').find(letter => rucksack[1].includes(letter) ? letter : false));
    const priorities = duplicateLetters.map(letter => letter!.charCodeAt(0) - (letter === letter?.toLowerCase() ? 96 : 38));

    return priorities.reduce((partialSum, add) => partialSum + add, 0);
}

const input = fs.readFileSync('src/day03/input.txt').toString('utf-8');
const priorities = calculatePriority(input);
console.log(priorities);
