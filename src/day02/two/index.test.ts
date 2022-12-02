import { calculateScore } from ".";

describe('That lazy elf', () => {
    const input = `A Y
B X
C Z`;
    
    test('Calulate score', () => {
       const expected = 12;
       expect(expected).toBe(calculateScore(input));
    });
});