import { executeAndPrint } from "../../util";
import { Assignment, countAssignments } from "../util";

export function count(input: string): number {
    return countAssignments(input, inAssignment);
}

function inAssignment(assignmentOne: Assignment, assignmentTwo: Assignment): boolean {
    return (assignmentOne.start >= assignmentTwo.start && assignmentOne.start <= assignmentTwo.end) 
    && (assignmentOne.end >= assignmentTwo.start && assignmentOne.end <= assignmentTwo.end);
}

executeAndPrint('src/day04/input.txt', count);