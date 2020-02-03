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


function likes(names) {

  let name1 = names[0]
  let name2 = names[1]
  let name3 = names[2]


  if (names.length < 1) {
    return "no one likes this"
  } else if (names.length < 2) {
    return `${name1} likes this`
  } else if (names.length < 3) {
    return `${name1} and ${name2} like this`
  } else if (names.length < 4) {
    return `${name1}, ${name2} and ${name3} like this`
  }
  return `${name1}, ${name2} and ${names.length - 2} others like this`
}


// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  // determine if array equals 10 mins in length (1 min per direction) - working

  let nArray = (walk.filter(n => n === "n").length)
  let sArray = (walk.filter(n => n === "s").length)
  let eArray = (walk.filter(n => n === "e").length)
  let wArray = (walk.filter(n => n === "w").length)

 
  return walk.length === 10 && nArray === sArray && eArray === wArray;
}


module.exports = {
  squareDigits,
  boolToWord,
  noSpace,
  likes,
  isValidWalk
};