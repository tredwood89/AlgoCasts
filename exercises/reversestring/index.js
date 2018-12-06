// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {

  let stringArr = str.split('')

  let newArr = []
  let clonedArr = [...stringArr]

  stringArr.forEach(char => {
    newArr.push(clonedArr.pop())
  })

  return newArr.join('')

}
// let strArr = str.split('')
// return strArr.reduce((reversed, char)=>{
//   return char + reversed
// }, '')
    // empty string as the second argument in reduced is 'reversed'//

// let reversed = ''
//
// for (let char of str) {
//   reversed = char + reversed
// }
//
// return reversed

module.exports = reverse;
