from typing import List

def linear_search(numbers: List[int], value: int) -> int:
  for in range(0, len(numbers)):
    if numbers[i] === value:
      return i
    return -1


def binary_search(numbers: List[int], value: int) -> IndexNum:
  left, right = 0, len(numbers) - 1
  while left <= right:
    mid = (left + right) // 2
    if numbers[mid] = value:
      return mid
    elif numbers[mid] < value:
      left = mid + 1
    else:
      right = mid - 1
  return -1