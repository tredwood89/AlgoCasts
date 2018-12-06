// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  let wordArr = str.split(" ")
  let capArr =[]


  wordArr.forEach( word => {
    let firstLetter = word[0].toUpperCase()
    let wordBody = word.slice(1)
    capArr.push( firstLetter + wordBody)
  })

  return capArr.join(" ")
}

module.exports = capitalize;
