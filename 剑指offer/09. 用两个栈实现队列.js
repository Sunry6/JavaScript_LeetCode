var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.outStack.length) {
    return this.outStack.pop();
  } else {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
    if (!this.outStack.length) {
      return -1;
    } else {
      return this.outStack.pop();
    }
  }
};
