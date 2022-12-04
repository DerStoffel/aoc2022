import { readLinesOfFile } from "../../util";

export type Assignment = {
    start: number
    end: number
}

export function countAssignments(input: string, criteria: (assignmentOne: Assignment, assignmentTwo: Assignment) => {}) {
    return readLinesOfFile(input)
    .map(assignments => assignments.split(',')
        .map(assignment => assignment.split('-')
            .map(value => parseInt(value))
        ).map(range => { return { start: range[0], end: range[1]}})
    )
    .filter(assignments => criteria(assignments[0], assignments[1]) || criteria(assignments[1], assignments[0]))
    .length;
}