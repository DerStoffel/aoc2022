import { executeAndPrint, readLinesOfFile } from "../../util";

export function calculateHighestScore(input: string): number {
    const trees = readLinesOfFile(input).map(treeRow => treeRow.split('').map(tree => parseInt(tree)));

    let max = 0;
	
	for (let i = 0; i < trees.length; i++) {
		const row = trees[i];
		for (let j = 0; j < row.length; j++) {
			const tree = row[j];
			let score = 1;
			
			let slices: number[][] = [[],[]];
			for (let k = 0; k < trees.length; k++) {
				if(k==i) continue;
				slices[Number(k < i)].push(trees[k][j]);
			}
			slices[1].reverse();

			slices.push(trees[i].slice(0,j).reverse());
			slices.push(trees[i].slice(j+1,trees[i].length));
			

			for (let i = 0; i < slices.length; i++) {
				const slice = slices[i];
				for (let k = 0; k < slice.length; k++) {
					if(slice[k] >= tree) {
						slices[i] = slice.slice(0,k + 1);
						break;
					}
				}
			}

			slices.forEach(s => {
				score *= s.length;
			});

			if(score > max) max = score;
		}
		
	}

	return max;
}

executeAndPrint('src/day08/input.txt', calculateHighestScore);