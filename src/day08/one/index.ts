import { executeAndPrint, readLinesOfFile } from "../../util";

export function getVisibleTrees(input: string): number {
    const treeMap = readLinesOfFile(input).map(treeRow => treeRow.split('').map(tree => parseInt(tree)));
    let visibleTrees = treeMap.map((treeRow, rowIndex) => {
        return treeRow.map(tree => { return { height: tree, visible: false}})
    }).map((treeRow, index) => {
        if(index === 0 || index === (treeMap.length-1)) {
            treeRow = treeRow.map(tree => { return { ...tree, visible: true}})
        } else {
            treeRow[0] = { ...treeRow[0], visible: true};
            treeRow[treeRow.length-1] = { ...treeRow[treeRow.length-1], visible: true};
        }

        return treeRow;
    })
  

    visibleTrees = visibleTrees.map((treeRow, rowIndex) => treeRow.map((tree, treeIndex) => {
        if(tree.visible === true) return tree;
        
        // visible from left
        const treesLeft = treeRow.slice(0, treeIndex);
        tree.visible = treesLeft.filter(treeLeft => treeLeft.height >= tree.height).length == 0;
        if(tree.visible === true) return tree;

        // visible from right
        const treesRight = treeRow.slice(treeIndex+1, treeRow.length);
        tree.visible = treesRight.filter(treeRight => treeRight.height >= tree.height).length == 0;
        if(tree.visible === true) return tree;

        // visible from top
        const treesTop = [];
        for(let i = 0; i < rowIndex; i++) {
            treesTop.push(visibleTrees[i][treeIndex]);
        }
        tree.visible = treesTop.filter(treeTop => treeTop.height >= tree.height).length == 0;
        if(tree.visible === true) return tree;

        // visible from bottom
        const treesBottom = [];
        for(let i = rowIndex+1; i < visibleTrees.length; i++) {
            treesBottom.push(visibleTrees[i][treeIndex]);
        }
        tree.visible = treesBottom.filter(treeBottom => treeBottom.height >= tree.height).length == 0;

        return tree;
    }));

    return visibleTrees.reduce((currentCount, row) => currentCount + row.filter(value => value.visible === true).length, 0);
}

executeAndPrint('src/day08/input.txt', getVisibleTrees);