import { readLinesOfFile } from "../../util";

export type Directory = {
    [key: string]: { size: number }
}

export function buildDirectoryTree(input: string): Directory {
    const consoleLines = readLinesOfFile(input);
    let directory: Directory = { '/': {size: 0} };
    let currentDirectory: string[] = ['/'];

    for(let i = 0; i < consoleLines.length; i++) {
        const consoleLine = consoleLines[i];
        const firstChar = consoleLine.substring(0,1);
        if(firstChar === '$') {
            // command
            if(consoleLine.includes(' cd ')) {
                // directory operation
                if(consoleLine.includes('..')) {
                    // navigate up
                    currentDirectory.pop();
                } else {
                    // navigate down
                    currentDirectory.push(consoleLine.split(' ')[2]);
                    directory[currentDirectory.join('/')]= { size: 0};
                }
            }
        } else {
            // dir or file
            if(!consoleLine.includes('dir ')) {
                // file
                const size = parseInt(consoleLine.split(' ')[0]);
                const temp: any[]=[];        
                currentDirectory.forEach(dir => {
                    temp.push(dir);            
                    const temp2 = temp.join('/');
                    directory[temp2].size += size;    
                });
            }
           
        }
    }

    return directory;
}