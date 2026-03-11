import {getRank, addScores, hasWon, getHighScore} from "./gameUtils";

test("Geef Noob terug met score 0",() =>{
    const result = getRank();
    expect(result).toBe("");
})


test("Geef Pro terug met score 0",() =>{
    const result = getRank();
    expect(result).toBe("");
})


test("Geef Legend terug met score 0",() =>{
    const result = getRank();
    expect(result).toBe("");
})