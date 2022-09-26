const linerSearch = (numbers: number[], value: number) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) {
      return i
    }
    return -1
  }
}

linerSearch([1, 2 , 3, 4, 7, 9], 7);