function breakOut(array, changeValue, stopValue) {
  for (let i=1; i<array.length; i+=1) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    } else {
      break
    }
  }
  return array
}
