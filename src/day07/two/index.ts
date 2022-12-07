import { executeAndPrint } from "../../util";
import { buildDirectoryTree } from "../util";

export function freeUpSpace(input: string): number {
    
    let directory = buildDirectoryTree(input);

    let size = 70000000;
    const freeUpSpace = directory['/'].size - size + 30000000;
    for(let key in directory) {
        if(directory[key].size > freeUpSpace && directory[key].size < size) {
            size = directory[key].size;
        }
    }

    return size;
}

executeAndPrint('src/day07/input.txt', freeUpSpace);