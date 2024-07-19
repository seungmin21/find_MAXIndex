function findindex(value : number[]): number{
  let index = value[0]
  for (const number of value) {
    if (number > index) {
      index = number
    }
  }
  return index;
}

const num = [1, 2, 3, 4, 5]
console.log(findindex(num));