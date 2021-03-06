const {
  squareDigits,
  boolToWord,
  noSpace,
  likes,
  isValidWalk,
  isPangram,
  filter_list,
  bouncingBall,
  ExesAndOhs,
  race,
  number,
  jadenCase

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
  test("Returns a string which includes the names of the first 2 people listed in the array if it includes more than 3 names", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  });
})

describe("isValidWalk", () => {
  test("Returns true if directions take 10 mins and is a loop, false if not", () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'])).toBe(false);
    expect(isValidWalk(['n', 'n', 'w', 'w', 'w', 's', 's', 'e', 'e', 'e'])).toBe(true);
    expect(isValidWalk(['w', 's', 'e', 'w', 'w', 's', 'w', 's', 's', 'n'])).toBe(false);
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
    expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false);
    expect(isValidWalk(['w'])).toBe(false);
    expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false);
  });
});

describe("isPangram", () => {
  test("Returns true if string is a pangram (contains at least 1 of every letter)", () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
    expect(isPangram("This is not a pangram")).toBe(false);
  })
  test("is not case sensitive", () => {
    expect(isPangram("aBcDefGhiJklMnoPQRstUvWxYz")).toBe(true);
  })
  test("Returns false when a letter is missing", () => {
    expect(isPangram("abcdefghijklmopqrstuvwxyz ")).toBe(false)
  })
})

describe("filter_list", () => {
  test("Return a new array with the strings filtered out", () => {
    expect(filter_list([1, 2, 'a', 'b'])).toEqual([1, 2])
    expect(filter_list([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15])
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123])
  })
})

describe("bouncingBall", () => {
  test("Number of times a bouncing ball passes a window is 3", () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3)
  })
  test("Number of times a bouncing ball passes a window is 15", () => {
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15)
  })
})

describe("ExesAndOhs", () => {
  test("return false if string does NOT contains same number of x's and o's", () => {
    expect(ExesAndOhs("xxoox")).toBe(false)
  })
  test("return true if string contains same number of x's and o's", () => {
    expect(ExesAndOhs("xoxo")).toBe(true)
  })
  test("includes upper and lower cases", () => {
    expect(ExesAndOhs("ooxXm")).toBe(true)
  })
})

describe("race", () => {
  test("return array of time in hours, mins, secs for v1 to catch up to v2", () => {
    expect(race(720, 850, 70)).toEqual([0, 32, 18])
  })
  test("return null if v1 is equal to/greater than v2", () => {
    expect(race(900, 550, 70)).toEqual(null)
  })
})

describe("number", () => {
  test("Returns a list of strings with each line prepended by the correct number.", () => {
    expect(number(["a", "b", "c"])).toEqual(["1: a", "2: b", "3: c"])
  })
  test("An empty array should return an empty array ", () => {
    expect(number([])).toEqual([])
  })
})

describe("jadenCase", () => {
  test("Returns the string will first letter of each word in upper case", () => {
    expect(jadenCase("How can mirrors be real if our eyes aren't real")).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
  })
  expect(jadenCase("If a book store never runs out of a certain book, dose that mean that nobody reads it, or everybody reads it")).toBe("If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It")
})
