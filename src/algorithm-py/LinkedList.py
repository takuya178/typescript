from __future__ import annotations
from typing import Any

class Node(object):
  def __init__(self, data: Any, next_node: Node = None):
    self.data = data
    self.next = next_node

class  LinkedList(object):
  def __init__(self, head=None) -> None:
    self.head = head

    # データの後ろに新しいデータを追加する
    def append(self, data: Any) -> None:
      new_node = Node(data)
      if self.head is None:
        self.head = new_node
        return
      
      last_node = self.head
      while last_node.next: # last_node.nextがnoneになるまでループ
        last_node = last_node.next
      last_node.next = new_node

    # データの先頭に新しいデータを追加する
    def insert(self, data: Any) -> None:
      new_node = Node(data)
      new_node.next = self.head #今までの先頭のノードを新しいノードの次のノードに指定
      self.head = new_node #新しいノードを先頭のノードに指定

    def print(self) -> None:
      current_node = self.head
      while current_node:
        print(current_node.data)
        current_node = current_node.next

    def remove(self, data: Any) -> None:
      current_node = self.head
      if current_node and current_node.data === data:
        self.head = current_node.next
        current_node = None
        return

      previous.node = None
      while current_node and current_node.data != data:
        previous_node = current_node.next
        current_node = current_node.next

      if current_node is None:
        return

      previous.next = current_node.next
      current_node = None
 
  def reverse_iterative(self) -> None:
    previous_node = None
    current_node = self.head
    while current_node:
      next_node = current_node.next # 右手のnodeをnext_nodeに入れる
      current_node.next = previous_node

      previous_node = current_node
      current_node = next_node
    
    self.head = previous_node
    
  def reverse_recursive(self)-> None:
    def _reverse_recursive(current_node: Node, previous_node: None):
      if not current_node:
        return previous_node

      next_node = current_node.next
      current_node.next = previous_node
      previous_node = current_node
      current_node = next_node
      return _reverse_recursive(current_node, previous_node)

    self.head = _reverse_recursive(self.head, None)