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

//alternative option:
// function isPangram(string) {
//   let charArray = string.trim().toLowerCase().replace(/[^a-zA-Z]/g).split("")
//   const charObj = {}
//   charArray.forEach(n => charObj[n] = charArray.filter(x => x === n).length.toString())
// return (Object.keys(charObj).length === 26 ? true : false)
//}

//Refactored to:
function isPangram(string) {

  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz".split("").every(n => {
    return string.indexOf(n) !== -1
  })
}

function filter_list(l) {
  return l.filter(n =>
    typeof (n) === "number"
  )
}


//Bouncingball:
// A ball from a height of  h and it bounces to two-thirds of its height (bounce = 0.66). A window sits 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.


function bouncingBall(h, bounce, window) {

  function newHeight() {
    h = h * bounce
  }

  let count = 0

  if (h > 0 && h > window && bounce > 0 && bounce < 1) {
    count++
    newHeight()
  } else {
    return -1
  }

  while (h > window) {
    count += 2
    newHeight()

  }
  return count
}


function ExesAndOhs(str) {
  let strArray = str.toLowerCase().split("")

  const o = strArray.filter(n => n === "o").length
  const x = strArray.filter(n => n === "x").length

  if (x === o) {
    return true
  }
  return false
}

function race(v1, v2, g) {
  let timeToTravelG = (3600 / (v2 - v1) * g)

  let hrs = Math.floor(timeToTravelG / 3600)
  let mins = Math.floor((timeToTravelG % 3600) / 60)
  let secs = Math.floor(timeToTravelG % 60)

  array = []
  array.push(hrs)
  array.push(mins)
  array.push(secs)
  return array
}


module.exports = {
  squareDigits,
  boolToWord,
  noSpace,
  likes,
  isValidWalk,
  isPangram,
  filter_list,
  bouncingBall,
  ExesAndOhs,
  race
}