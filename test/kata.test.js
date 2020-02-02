const {
  squareDigits,
  boolToWord,
  noSpace,
  likes
} = require("../kata_functions");

describe("squareDigits", () => {
  test("Returns the square of each given digit", () => {
    expect(squareDigits(3212)).toBe(9414);
    expect(squareDigits(2112)).toBe(4114);
  });
});

describe("boolToWord", () => {
  test("Returns Yes if boolean is true, or No if false", () => {
    expect(boolToWord(true)).toBe("Yes");
    expect(boolToWord(false)).toBe("No");
    expect(boolToWord(0 < 1)).toBe("Yes");
    expect(boolToWord("true")).toBe("No");
  });
});

describe("noSpace", () => {
  test("Returns string without spaces", () => {
    expect(noSpace("jfBm  gk lf8hg  88lbe8")).toBe("jfBmgklf8hg88lbe8");
    expect(noSpace("8aaaaa dddd r     ")).toBe("8aaaaaddddr");
  });
});

describe("likes", () => {
  test("Return the string 'no one likes this', if array is empty", () => {
    expect(likes([])).toBe("no one likes this");
  });
  test("Returns a string which includes the names of people listed in the array if it contains up to 3 names", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  })
  // test("Returns a string which includes the names of the first 2 people listed in the array if it includes more than 3 names", () => {
  //   expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  // });
})



