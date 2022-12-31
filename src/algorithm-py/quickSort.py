from typing import List

# pivotが最終的に配置されるindex番号
def partition(numbers: List[int], low: int, high: int) -> int:
  i = low - 1 # iは-1から始めて、jは０から始める　
  pivot = numbers[high]
  for j in range(low, high):
    if numbers[j] <= pivot:
      i += 1
      numbers[i], numbers[j] = numbers[j], numbers[i]
  numbers[i+1], numbers[high] = numbers[high], numbers[i+1]
  return i+1

def quick_sort(numbers: List[int]) -> List[int]:
  def _quick_sort(numbers: List[int], low: int, high: int) -> None:
    if low < high:
      partition_index = partition(numbers, low, high)
      _quick_sort(numbers, low ,partition_index - 1) # pivotの左側
      _quick_sort(numbers, partition_index + 1, high) # pivotの右側

    _quick_sort(numbers, 0, len(numbers) - 1)
    return numbers