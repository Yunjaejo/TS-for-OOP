interface Stack {
  push(value: string): void;
  pop(): string;
  readonly size: number;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this._size === this.capacity) {
      throw new Error('Stack is full!')
    }
    this.head = { value, next: this.head };
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }

}

const st = new StackImpl(3);

st.push('1 윤재')
st.push('2 윤재')
st.push('3 윤재')

while (st.size !== 0) {
  console.log(st.pop());
}