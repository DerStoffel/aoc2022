import { rearrangeCrates } from "./index";

describe('crane operate puzzle', () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
    1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`
    
    test('CrateMover 9001', () => {
        expect(rearrangeCrates(input)).toBe('MCD');
    })
})