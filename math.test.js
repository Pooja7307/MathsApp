const { sum, multiply } = require("./math");

test("sum of 2 and 3 should be 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("sum of -1 and 1 should be 0", () => {
    expect(sum(-1, 1)).toBe(0);
});

test("multiply 2 and 3 should be 6", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("multiply 0 and 5 should be 0", () => {
    expect(multiply(0, 5)).toBe(0);
});
