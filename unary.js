const unary = (fn) =>
  fn.length === 1
    ? fn
    : function (something) {
        return fn.call(this, something)
      }

console.log(['1', '2', '3'].map(unary(parseInt)))

console.log(['1', '2', '3'].map((s) => parseInt(s)))