import * as fs from 'fs';

export function sumArrayValues(input: number[]): number {
    return input.reduce((partialSum, add) => partialSum + add, 0);
}

export function executeAndPrint(inputFilePath: string, func: (input: string) => void) {
    const input = fs.readFileSync(inputFilePath).toString('utf-8');
    console.log(func(input));
}