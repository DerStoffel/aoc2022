// supplies are stacks of marked crates
// crates are stacked
// crates need to be re-arranged
// cargo crane re-arranges in planned steps
// desired crates will be at the top of the steps
// crates are moved one at the time

import { readLinesOfFile } from "../../util";

type Step = {
    move: number
    from: number
    to: number
}

export function rearrangeCrate(input: string): string {
    let result: string = '';

    const [cratesBlock, stepsBlock] = input.split('\n\n');
    const steps: Step[] = readLinesOfFile(stepsBlock).map(step => { const arr = step.split(' '); return { move: parseInt(arr[1]), from: parseInt(arr[3]), to: parseInt(arr[5])}});
    const crates: any = [];
    const crateLines = readLinesOfFile(cratesBlock);
    crateLines.map((line, index) => {
        
        const stackSize = crateLines.length - index;
        const crate = {
            stack: index+1,
            crates: [
                { position: stackSize, crate: line.substring(0, 3) },
                { position: stackSize, crate: line.substring(0, 3) },
                { position: stackSize, crate: line.substring(0, 3) }
            ]
        }
        crates.push(crate);
        console.log(crate);
    });

    console.log(steps);
    console.log(crates);

    return result;
}