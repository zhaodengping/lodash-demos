let _ = require('lodash')

const array=[{obj1:1},{obj2:2}]
const array2=[{obj2:2}]

console.log(_.differenceWith(array,array2,_.isEqual))