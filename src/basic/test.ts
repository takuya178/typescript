export default function test() {
  const insertionSort = (numbers: number[]): number[] => {
    let lenNumbers = numbers.length
    for (let i = 1; i < lenNumbers; i ++) {
      const temp = numbers[i];
      let j = i - 1
      while (j >= 0 && numbers[j] > temp) {
        numbers[j + 1] = numbers[j]
        j -= 1
      }
      numbers[j + 1] = temp
    }
    console.log(numbers)
    return numbers
  }
  insertionSort([2, 5, 1, 8, 7, 3])
}