class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return (this.queueControl.length === 0);
  }

  canEnqueue() {
    return (this.isEmpty() || this.queueControl.length < this.MAX_SIZE);
  }

  enqueue(elment) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(elment);
      this.isEmpty();
      return this.queueControl;
    }
    return false;
  }

  // First in - First out
  dequeue() {
    return (!this.isEmpty()) ? this.queueControl.pop() : false;
  }
}
