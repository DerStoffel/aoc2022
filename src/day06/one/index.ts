import { executeAndPrint } from "../../util";
import { findMarkerPosition } from "../util";
export function find(input: string): number {
    return findMarkerPosition(input, 4);
} 

executeAndPrint('src/day06/input.txt', find);