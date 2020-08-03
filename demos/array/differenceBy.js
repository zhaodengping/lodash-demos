let _ = require('lodash')

let array=[1.2,2.2]
let array2=[2.1,2.3]

console.log(_.differenceBy(array,array2,Math.floor))