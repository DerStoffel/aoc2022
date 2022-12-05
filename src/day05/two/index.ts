import { executeAndPrint } from "../../util";
import { getTopCrates, readCrates } from "../util";


export function rearrangeCrates(input: string): string {
    const { matrix, steps} = readCrates(input);

    for(let { move, from, to } of steps) {
        let crates = matrix[from-1].splice(-1 * move, move);
        matrix[to-1].push(...crates);
    }

    return getTopCrates(matrix);
}

executeAndPrint('src/day05/input.txt', rearrangeCrates);