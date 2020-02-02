function squareDigits(num) {
  let numArray = num.toString().split("");

  const map = numArray.map(n => n * n)

  return (Number(map.join("")))
}


function boolToWord(bool) {
  return result = (bool === true) ? "Yes" : "No"
}

function noSpace(x) {
  return x.split(' ').join('')
}

//[] toBe "no one likes this" <1
//["Peter"] toBe "Peter likes this"; <2
//["Max", "John"] to be "Max and John like this" <3
//["Max", "John", "Mark"] toBe "Max, John and Mark like this" <4
//["Alex", "Jacob", "Mark", "Max"] toBe "Alex, Jacob and 2 others like this" >4

function likes(names) {
  if (names.length < 1) {
    return "no one likes this"
  } else if (names.length < 2) {
    return names[0] + " likes this"
  } else if (names.length < 3) {
    return names[0] + " and " + names[1] + " like this"
  } else if (names.length < 4) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"
  }
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " like this"
}




module.exports = {
  squareDigits,
  boolToWord,
  noSpace,
  likes
};