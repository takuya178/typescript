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

// 再帰関数で書いた場合
const binarySearch2 = (numbers: number[], value: number) => {
  const _binary_search = (numbers: number[], value: number, left: number, right: number): number => {
    let mid = (left + right) / 2;
    if (numbers[mid] === value) {
      return mid
    } else if (numbers[mid] < value) {
      return _binary_search(numbers, value, mid + 1, right);
    } else {
      return _binary_search(numbers, value, left, mid - 1);
    }
  }
  return _binary_search(numbers, 4, 0, (numbers.length));
}

binarySearch([1, 2 , 3, 4, 7, 9], 7);