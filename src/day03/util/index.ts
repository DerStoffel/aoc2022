export function calculatePriorityByLetter(letters: string[]): number[] {
   return letters.map(letter => letter!.charCodeAt(0) - (letter === letter?.toLowerCase() ? 96 : 38));
}