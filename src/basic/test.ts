export default function test() {
  const selectionSort = (numbers: number[]): number[] => {
    const lenNumbers = numbers.length

    for (let i = 0; i < lenNumbers; i++) {
      let minNumber = i;
      for (let j = (i + 1);  j < lenNumbers; j++) {
        if (numbers[minNumber] > numbers[j]) minNumber = j;
      }
      [numbers[i], numbers[minNumber]] = [numbers[minNumber], numbers[i]]
    }
    console.log(numbers)
    return numbers
  }
  selectionSort([2, 5, 1, 8, 7, 3])
}