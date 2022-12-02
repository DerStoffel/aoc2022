import * as fs from 'fs';
import { stringToSum } from "../one";

export function findTopThreeCarriedCalories(input: string): number {
    const elvesCalories = stringToSum(input);
    elvesCalories.sort((a, b) => {
        return b - a;
    });

    elvesCalories.length = 3

    return elvesCalories.reduce((partialSum, add) => partialSum + add, 0);
}

const input = fs.readFileSync('src/day01/input.txt').toString('utf-8');
const topThreeCarriedCalories = findTopThreeCarriedCalories(input);
console.log(topThreeCarriedCalories);
