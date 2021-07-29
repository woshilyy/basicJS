Object.defineProperty(Object, 'assign', {
  value: function(target, ...args) {
    if (target === null) {
      return new TypeError('cannot convert undefined or null to object')
    }
    const to = Object(target)
  }
})
