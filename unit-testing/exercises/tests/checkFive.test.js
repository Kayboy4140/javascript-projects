const checkFive = require('../checkFive.js');

describe("checkFive", function() {

    test("returns 'num is less than 5' if num < 5", () => {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    test("returns 'num is greater than 5' if num > 5", () => {
        let output = checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });

    test("returns 'num is equal to 5' if num = 5", () => {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

})