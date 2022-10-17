const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  constructor (){
    this.linkStart = null
    this.linkEnd = null
  }

  getUnderlyingList() {
    return this.linkStart
  }

  enqueue(value) {
    if(this.linkStart==null){
      this.linkStart=this.linkEnd={value: value, next:null}
    }
    else{
      let temp={value:value, next:null}
      this.linkEnd.next = temp
      this.linkEnd = temp
    }
  }

  dequeue() {
    
    let result

    if(this.linkStart!=null)   {
      result = this.linkStart.value
      this.linkStart=this.linkStart.next
    }

    return result
  }
}

module.exports = {
  Queue
};
