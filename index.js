function LinkedList() {
  let headNode = null;
  const prepend = (value) => {
    const newNode = Node(value);
    if (!headNode) {
      headNode = newNode;
    } else {
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  };
  const getSize = () => {
    let count = 0;
    let currentNode = headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  };
  const at = (n) => {
    if (n >= getSize() || n < 0) {
      return undefined;
    }
    let currentNode = headNode;
    for (let i = 0; i <= n; i++) {
      if (i === n) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  };
  const append = (value) => {
    const newNode = Node(value);
    const size = getSize();
    if (!size) {
      headNode = newNode;
      return;
    }
    at(size - 1).nextNode = newNode;
  };
  const getTail = (list) => {
    if (!list.nextNode) {
      return list;
    } else return getTail(list.nextNode);
  };
  const pop = () => {
    const size = getSize();
    if (!size) return;
    if (size === 1) {
      headNode = null;
      return;
    }
    let target = at(size - 2);
    target.nextNode = null;
  };
  const toString = () => {
    const size = getSize();
    let result = "";
    for (let i = 0; i < size; i++) {
      result += `( ${at(i).value} ) -> `;
    }
    return result + "null";
  };
  const contains = (value) => {
    const size = getSize();
    for (let i = 0; i < size; i++) {
      if (at(i).value === value) {
        return true;
      }
    }
    return false;
  };
  const find = (value) => {
    const size = getSize();
    for (let i = 0; i < size; i++) {
      if (at(i).value === value) {
        return i;
      }
    }
    return null;
  };
  const insertAt = (value, index) => {
    const size = getSize();
    const newNode = Node(value);
    const preNode = at(index - 1);
    if (at(index)) {
      newNode.nextNode = at(index);
    }
    if (preNode) {
      at(index - 1).nextNode = newNode;
    } else {
      at(size - 1).nextNode = newNode;
    }
  };
  const removeAt = (index) => {
    if (index === 0) {
      headNode = headNode.nextNode;
    } else if (at(index)) {
      at(index - 1).nextNode = at(index + 1) ? at(index + 1) : null;
    }
  };

  return {
    append,
    prepend,
    at,
    pop,
    toString,
    contains,
    find,
    insertAt,
    removeAt,
    get head() {
      return headNode;
    },
    get tail() {
      const v = at(getSize() - 1);
      return v ? v : null;
    },
    get size() {
      return getSize();
    },
  };
}
function Node(input) {
  return { value: input, nextNode: null };
}
const m = LinkedList();
m.append("newew");
m.append("dog");
m.append("mouse");
m.append("cat");
m.prepend("wolf");
