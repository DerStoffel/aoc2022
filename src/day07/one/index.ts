import { executeAndPrint } from "../../util";
import { buildDirectoryTree } from "../util";

export function findDirectorySize(input: string): number {
    
    let directory = buildDirectoryTree(input);
    
    let sum = 0;
    for(let key in directory) {
        if(directory[key].size <= 100000) {
            sum += directory[key].size; 
        }
    }

    return sum;
}

executeAndPrint('src/day07/input.txt', findDirectorySize);