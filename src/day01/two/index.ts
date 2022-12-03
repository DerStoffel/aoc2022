import { executeAndPrint, sumArrayValues } from '../../util';
import { stringToSum } from "../one";

export function findTopThreeCarriedCalories(input: string): number {
    const elvesCalories = stringToSum(input);
    elvesCalories.sort((a, b) => {
        return b - a;
    });

    elvesCalories.length = 3

    return sumArrayValues(elvesCalories);
}

executeAndPrint('src/day01/input.txt', findTopThreeCarriedCalories);