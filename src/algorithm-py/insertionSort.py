from typing import List

def insertion_sort(numbers: List[int]) -> List[int]:
  len_numbers = len(numbers)
  for i in range(1, len_numbers):
    temp = numbers[i] # 今回だと7が該当
    j = i - 1
    while j >= 0 and numbers[j] > temp:
      numbers[j + 1] = numbers[j] # 後ろと前の数をずらしていってる
      j -= 1

    numbers[j + 1] = temp
  
  return numbers

insertion_sort([1, 7, 3, 2, 8, 5])
