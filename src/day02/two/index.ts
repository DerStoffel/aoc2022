import * as fs from 'fs';

const rockPaperScissors = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
}
type RockPaperScissors = keyof typeof rockPaperScissors;

const strategyGuide = {
    Y: 'draw',
    X: 'lose',
    Z: 'win'
}

type Strategy = keyof typeof strategyGuide;

const rockPaperScissorsScore = {
    rock: 1,
    paper: 2,
    scissors: 3
}
type RockPaperScissorsScore = keyof typeof rockPaperScissorsScore;

function getMyScore(playerOne: RockPaperScissors, playerTwo: Strategy): number {
    const handPlayerOne = rockPaperScissors[playerOne];
    const strategyPlayerTwo = strategyGuide[playerTwo];

    let handPlayerTwo = handPlayerOne;
    if(strategyPlayerTwo === strategyGuide.X) {
        if(handPlayerOne === rockPaperScissors.A) handPlayerTwo = rockPaperScissors.C;
        if(handPlayerOne === rockPaperScissors.B) handPlayerTwo = rockPaperScissors.A;
        if(handPlayerOne === rockPaperScissors.C) handPlayerTwo = rockPaperScissors.B;
    }

    if(strategyPlayerTwo === strategyGuide.Z) {
        if(handPlayerOne === rockPaperScissors.A) handPlayerTwo = rockPaperScissors.B;
        if(handPlayerOne === rockPaperScissors.B) handPlayerTwo = rockPaperScissors.C;
        if(handPlayerOne === rockPaperScissors.C) handPlayerTwo = rockPaperScissors.A;
    }

    let score = rockPaperScissorsScore[handPlayerTwo as RockPaperScissorsScore];
    if(handPlayerOne === handPlayerTwo) score += 3

    if(handPlayerTwo === rockPaperScissors.A && handPlayerOne === rockPaperScissors.C) score += 6;
    if(handPlayerTwo === rockPaperScissors.B && handPlayerOne === rockPaperScissors.A) score += 6;
    if(handPlayerTwo === rockPaperScissors.C && handPlayerOne === rockPaperScissors.B) score += 6;

    return score;
}

export function calculateScore(input: string): number {
    const rounds = input.split("\n").map(round => round.split(' '));
    const scores = rounds.map(round => getMyScore(round[0] as RockPaperScissors, round[1] as Strategy));

    return scores.reduce((partialSum, add) => partialSum + add, 0);
}

const input = fs.readFileSync('src/day02/input.txt').toString('utf-8');
const score = calculateScore(input);
console.log(score);
