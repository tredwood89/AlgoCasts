// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size, chunkArr = []) {

  let miniArr = []

  if (array.length === 0){
    return chunkArr
  }

 for ( let i = 0; i < size; i++) {
   if (array.length > 0){
     miniArr.push(array.shift())
   }
   
}

  chunkArr.push(miniArr)

  return chunk(array, size, chunkArr)
}

module.exports = chunk;
