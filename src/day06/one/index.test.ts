import { findMarkerPosition } from "../util";

describe('communicate people', () => {
    test('find marker position', () => {
        const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
        expect(findMarkerPosition(input, 4)).toBe(5);
    })

    test('find marker position', () => {
        const input = 'nppdvjthqldpwncqszvftbrmjlhg';
        expect(findMarkerPosition(input, 4)).toBe(6);
    })

    test('find marker position', () => {
        const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
        expect(findMarkerPosition(input, 4)).toBe(10);
    })

    test('find marker position', () => {
        const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
        expect(findMarkerPosition(input, 4)).toBe(11);
    })
})