function Parent () {
  this.name = 'parent'
}
function Child () {
  Parent.call(this)
  this.type = 'children'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child





function Parent () {
  this.name = 'parent'
}
function Child () {
  Parent.call(this)
  this.type = 'Child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
