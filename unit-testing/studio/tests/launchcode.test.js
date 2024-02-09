// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("check that the value of organization is 'nonprofit'", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("check that the value of executiveDirector is 'Jeff'", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check that the value of percentageCoolEmployees is 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("check that the value of programsOffered is an array with three elements", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("returns 'Launch!' when a number that is only divisible by 2 is passed", () => {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });

  test("returns 'Code!' when a number that is only divisible by 3 is passed", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("returns 'Rocks!' when a number that is only divisible by 5 is passed", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("returns 'LaunchCode!' when a number that is divisible by 2 and 3 is passed", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("returns 'Code Rocks!' when a number that is divisible by 3 and 5 is passed", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("returns 'Launch Rocks! (CRASH!!!!)' when a number that is divisible by 2 and 5 is passed", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("returns 'LaunchCode Rocks!' when a number that is divisible by 2,3, and 5 is passed", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("returns 'Rutabagas! That doesn't work.' when a number that is not divisible by 2,3, or 5 is passed", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });


  // Write your unit tests here!
  
});