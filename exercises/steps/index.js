// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//print n number of strings
//push n number of #
// push n-y number of ' '
function steps(n) {

 let stepStr = ''
 let counter = n

 for (let i = 0; i < n; i++ ){

     stepStr += '#'.repeat(i+1)
     stepStr += ' '.repeat(n - (i+1))
     console.log(stepStr);
     stepStr = ''
   }

   return stepStr
}


module.exports = steps;
