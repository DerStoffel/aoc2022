import { readLinesOfFile } from "../../util";

export type Step = {
    move: number
    from: number
    to: number
} 
 
 export function readCrates(input: string): { matrix: any[], steps: Step[]} {
    const [cratesBlock, stepsBlock] = input.split('\n\n');
    const steps: Step[] = readLinesOfFile(stepsBlock).map(step => { const arr = step.split(' '); return { move: parseInt(arr[1]), from: parseInt(arr[3]), to: parseInt(arr[5])}});
    
    const crateLines = readLinesOfFile(cratesBlock);
    crateLines.pop();
    
    const matrix: any = [];
    for(let crateLine of crateLines) {
        for(let i = 0; i < crateLine.length; i += 4) {
            const start = i;
            const end = start + 4;
            const crate = crateLine.substring(start, end);
    
            const stackPos = i / 4;
            if(!matrix[stackPos]) matrix[stackPos] = [];
            if(crate.trim()) matrix[stackPos].push(crate.substring(1, 2));
        }
    }
    
    for (let stack of matrix) {
        stack.reverse();
    }

    return { matrix: matrix, steps: steps};
 }


 export function getTopCrates(matrix: any[]): string {
    return matrix.map((stack: string | any[]) => stack[stack.length-1]).join('');
 }
