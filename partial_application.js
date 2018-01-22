const callFirst = (fn, larg) =>
  function (...rest) {
    return fn.call(this, larg, ...rest);
  }

const callLast = (fn, rarg) =>
  function (...rest) {
    return fn.call(this, ...rest, rarg);
  }

const greet = (me, you) =>
  `Hello, ${you}, my name is ${me}`;
  
const heliosSaysHello = callFirst(greet, 'Helios');

console.log(heliosSaysHello('Eartha'))
  //=> 'Hello, Eartha, my name is Helios'
  
const sayHelloToCeline = callLast(greet, 'Celine');

console.log(sayHelloToCeline('Eartha'))
  //=> 'Hello, Celine, my name is Eartha'