import { executeAndPrint, sumArrayValues } from '../../util';

const rockPaperScissors = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
}
type RockPaperScissors = keyof typeof rockPaperScissors;

const rockPaperScissorsScore = {
    rock: 1,
    paper: 2,
    scissors: 3
}
type RockPaperScissorsScore = keyof typeof rockPaperScissorsScore;

function getMyScore(playerOne: RockPaperScissors, playerTwo: RockPaperScissors): number {
    const handPlayerOne = rockPaperScissors[playerOne];
    const handPlayerTwo = rockPaperScissors[playerTwo];

    let score = rockPaperScissorsScore[handPlayerTwo as RockPaperScissorsScore];
    if(handPlayerOne === handPlayerTwo) score += 3

    if(handPlayerTwo === 'rock' && handPlayerOne === 'scissors') score += 6;
    if(handPlayerTwo === 'paper' && handPlayerOne === 'rock') score += 6;
    if(handPlayerTwo === 'scissors' && handPlayerOne === 'paper') score += 6;

    return score;
}

export function calculateScore(input: string): number {
    const rounds = input.split("\n").map(round => round.split(' '));
    const scores = rounds.map(round => getMyScore(round[0] as RockPaperScissors, round[1] as RockPaperScissors));

    return sumArrayValues(scores);
}

executeAndPrint('src/day02/input.txt', calculateScore);

