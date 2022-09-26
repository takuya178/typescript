export default function test() {
  const mergeSort = (numbers: number[]): number[] => {
    if (numbers.length <= 1) return numbers;

    const center = numbers.length / 2
    const left = numbers.slice(center, numbers.length)
    const right = numbers.slice(0, center)
    
    // 要素が1つになるまでslice
    mergeSort(left);
    mergeSort(right);

    let i = 0
    let j = 0
    let k = 0

    // 図の[4, 5]ができている前提で以下の処理を書く
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        numbers[k] = left[i]
        i += 1
      } else {
        numbers[k] = right[j]
        j += 1
      }
      k += 1
    }

    // right[4, 5], left[1, 8]で8が入りきれなかったので以下の処理で追加
    while (i < left.length) {
      numbers[k] = left[i]
      i += 1;
      k += 1;
    }

    while (j < right.length) {
      numbers[k] = right[j]
      j += 1;
      k += 1;
    }

    return numbers
  }
  mergeSort([2, 5, 1, 8, 7, 3, 9, 10])
}