import { executeAndPrint, sumArrayValues } from '../../util';

export function stringToSum(input: string): number[] {
    const stringGroups = input.split("\n\n");
    const stringArrayGroups = stringGroups.map(stringGroup => stringGroup.split(/\r?\n|\r|\n/g));
    const numberGroups = stringArrayGroups.map(stringGroup => stringGroup.map(singleString => parseInt(singleString)));
    const numberSums = numberGroups.map(numberGroup => sumArrayValues(numberGroup));

    return numberSums;
}


export function findMostCaloriesCarriedByAnElf(input: string): number {
    const elvesCalories = stringToSum(input);

    let highestCalories = 0;
    elvesCalories.forEach((elvCalories) => {
        if(elvCalories > highestCalories) { highestCalories = elvCalories}
    })

    return highestCalories;
}

executeAndPrint('src/day01/input.txt', findMostCaloriesCarriedByAnElf);