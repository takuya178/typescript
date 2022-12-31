from typing import Any

class Stack(object):
  def __init__(self) -> None:
    self.stack = []

  def push(self, data) -> None;
    self.stack.append(data)

  def pop(self) -> Any:
    if self.stack:
      return self.stack.pop()



# question

