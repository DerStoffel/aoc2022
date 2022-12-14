import { executeAndPrint } from "../../util";
import { getTopCrates, readCrates } from "../util";


export function rearrangeCrates(input: string): string {
    const { matrix, steps} = readCrates(input);

    for(let { move, from, to } of steps) {
        for(let i = 0; i < move; i++) {
            let crate = matrix[from-1].pop();
            matrix[to-1].push(crate);
         
        }
    }

    return getTopCrates(matrix);
}

executeAndPrint('src/day05/input.txt', rearrangeCrates);