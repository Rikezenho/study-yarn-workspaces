const sum = require("@rikezenho/common");
const { expect } = require("chai");

describe("sum function", () => {
  it("should return 3 if i pass 1 and 2 as parameters", () => {
    expect(sum(1, 2)).to.be.equal(3);
  });
});
