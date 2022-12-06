export function findMarkerPosition(input: string, size: number): number {
    const chars = input.split("");
    let buffer = size;
    while(buffer < chars.length) {
        const checkInput = chars.slice(buffer - size, buffer);
        const match = new Set(checkInput).size === checkInput.length ? checkInput.indexOf(chars[buffer]) : 0;

        buffer++;

        if(match >= 0) {
            buffer += match;
        } else {
            return buffer-1;
        }
    }

    return buffer;
}