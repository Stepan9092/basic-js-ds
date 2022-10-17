const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.rootNode = null
    this.createEl = (value) => { return { data: value, left: null, right: null } }
  }

  root() {
    return this.rootNode
  }

  add(data) {
    if (this.rootNode == null) this.rootNode = this.createEl(data)
    else {
      let pointer = this.rootNode
      while (true) {
        if (data < pointer.data) {
          if (pointer.left == null) {
            pointer.left = this.createEl(data)
            break
          }
          pointer = pointer.left
        }
        if (data > pointer.data) {
          if (pointer.right == null) {
            pointer.right = this.createEl(data)
            break
          }
          pointer = pointer.right
        }
      }
    }
  }

  has(data) {
    let pointer = this.rootNode
    while (pointer !== null) {
      if (pointer.data === data) { return true }
      let temp
      if (data < pointer.data) temp = pointer.left
      if (data > pointer.data) temp = pointer.right
      pointer = temp
    }
    return false
  }

  find(data) {
    let pointer = this.rootNode
    while (pointer !== null) {
      if (pointer.data === data) { return pointer }
      let temp
      if (data < pointer.data) temp = pointer.left
      if (data > pointer.data) temp = pointer.right
      pointer = temp
    }
    return null
  }

  remove(data) {
    if(this.has(data)){
      let pointer = this.rootNode
      let prev=pointer
      while (pointer.data!=data){
        let temp
        if (data < pointer.data) temp = pointer.left
        if (data > pointer.data) temp = pointer.right
        prev=pointer
        pointer = temp
      }

      if(pointer==this.rootNode) this.rootNode=null

      if(prev.left==pointer) prev.left=null
      if(prev.right==pointer) prev.right=null

      let addElements =  (node)=>{
        this.add(node.data)
        if(node.left) addElements(node.left)
        if(node.right) addElements(node.right)
      }

      if(pointer.right) addElements(pointer.right)
      if(pointer.left) addElements(pointer.left)
    }
  }

  min() {
    if (this.rootNode == null) { return null }

    let pointer = this.rootNode

    while (pointer.left) {
      pointer = pointer.left
    }

    return pointer.data
  }

  max() {
    if (this.rootNode == null) { return null }

    let pointer = this.rootNode

    while (pointer.right) {
      pointer = pointer.right
    }

    return pointer.data
  }
}



module.exports = {
  BinarySearchTree
};