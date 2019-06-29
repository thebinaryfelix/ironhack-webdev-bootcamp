class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return (this.stackControl.length === 0);
  }

  canPush() {
    return (this.isEmpty() || this.stackControl.length < this.MAX_SIZE);
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      this.isEmpty();
      return this.stackControl;
    }
    return false;
  }

  // Last in - First out
  pop() {
    return (!this.isEmpty()) ? this.stackControl.pop() : false;
  }
}
