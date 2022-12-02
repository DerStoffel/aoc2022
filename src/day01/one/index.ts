import * as fs from 'fs';

function stringToSum(input: string): number[] {
    const stringGroups = input.split("\n\n");
    const stringArrayGroups = stringGroups.map(stringGroup => stringGroup.split(/\r?\n|\r|\n/g));
    const numberGroups = stringArrayGroups.map(stringGroup => stringGroup.map(singleString => parseInt(singleString)));
    const numberSums = numberGroups.map(numberGroup => numberGroup.reduce((partialSum, add) => partialSum + add, 0));

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

const input = fs.readFileSync('src/day01/one/input.txt').toString('utf-8');
const mostCarriedCalories = findMostCaloriesCarriedByAnElf(input);
console.log(mostCarriedCalories);
