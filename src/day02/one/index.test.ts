import { calculateScore } from ".";

describe('Did the elf trick me?', () => {
    const input = `A Y
B X
C Z`;
    
    test('Calulate score', () => {
       const expected = 15;
       expect(expected).toBe(calculateScore(input));
    });
});