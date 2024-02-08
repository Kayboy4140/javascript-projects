const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test("returns a tie if same choice of rock", () => {
        expect(whoWon("rock","rock")).toBe("TIE!");
    });

    test("returns a tie if same choice of paper", () => {
        expect(whoWon("paper","paper")).toBe("TIE!");
    });

    test("returns a tie if same choice of scissors", () => {
        expect(whoWon("scissors","scissors")).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if player 1 plays rock and player 2 paper", () => {
        expect(whoWon("rock","paper")).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if player 1 plays paper and player 2 scissors", () => {
        expect(whoWon("paper","scissors")).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if player 1 plays scissors and player 2 rock", () => {
        expect(whoWon("scissors","rock")).toBe("Player 2 wins!");
    });

    test("returns 'Player 1 wins!' if player 1 plays rock and player 2 scissors", () => {
        expect(whoWon("rock","scissors")).toBe("Player 1 wins!");
    });

    test("returns 'Player 1 wins!' if player 1 plays paper and player 2 rock", () => {
        expect(whoWon("paper","rock")).toBe("Player 1 wins!");
    });

    test("returns 'Player 1 wins!' if player 1 plays scissors and player 2 paper", () => {
        expect(whoWon("scissors","paper")).toBe("Player 1 wins!");
    });

    test("returns 'invalid choice' if other than rock, paper, or scissors", () => {
        expect(whoWon("bag","bag")).toBe("Invalid choice!");
    });


})