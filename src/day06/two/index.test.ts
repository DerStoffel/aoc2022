import { findMarkerPosition } from "../util";

describe('are there markers?', () => {
    test('find marker', () => {
        const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
        expect(findMarkerPosition(input, 14)).toBe(23)
    });

    test('find marker', () => {
        const input = 'nppdvjthqldpwncqszvftbrmjlhg';
        expect(findMarkerPosition(input, 14)).toBe(23)
    });

    test('find marker', () => {
        const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
        expect(findMarkerPosition(input, 14)).toBe(29)
    });

    test('find marker', () => {
        const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
        expect(findMarkerPosition(input, 14)).toBe(26)
    });
}) 