export default function test() {
  const nums = (numbers: number[]): number[] => {
    let lenNumbers = numbers.length;
    for (let i = 0; i < lenNumbers; i ++) {
      for (let j = 0; j < lenNumbers - 1 - i; j ++) {
        if (numbers[j] > numbers[j + 1]) {
          [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
        }
      }
    }
    return numbers;
  }
  nums([2, 5, 1, 8, 7, 3])
}