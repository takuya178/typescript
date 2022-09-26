const binarySearch = (numbers: number[], value: number) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = (left + right) / 2;
    if (numbers[mid] === value) {
      return mid
    } else if (numbers[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return - 1
}

binarySearch([1, 2 , 3, 4, 7, 9], 7);