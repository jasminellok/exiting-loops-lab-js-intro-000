function breakOut(array, changeValue, stopValue) {
  for (let num = 1; num < array.length; num += 1) {
    if (array[num] !== stopValue) {
      array[num] = changeValue
    } else {
      break
    }
  }
  return array
}
