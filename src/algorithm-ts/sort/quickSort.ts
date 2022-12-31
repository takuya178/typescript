const partition = (numbers: number[], low: number, high: number): number => {
  let i = low - 1
  const pivot = numbers[high]
  for (let j = low; j < high; j++) {
    if (numbers[j] <= pivot) {
      i += 1;
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }
  [numbers[i+1], numbers[high]] = [numbers[high], numbers[i+1]]
  return i + 1
}

const quickSort = (numbers: number[]): number[] => {
  const _quickSort = (numbers: number[], low: number, high: number) => {
    if (low < high) {
      const partitionIndex = partition(numbers, low, high)
      _quickSort(numbers, low, partitionIndex - 1)
      _quickSort(numbers, partitionIndex + 1, high)
    }
  }
  _quickSort(numbers, 0, numbers.length - 1)
  console.log(numbers)
  return numbers;
}
quickSort([2, 5, 1, 8, 7, 3])