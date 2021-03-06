## 数组Array

### chunck 分割数组

将数组根据指定的长度进行分割，默认是1。

如果不能很平均的被分割，最后一个被分割的数组将成为最后一个。

结果是分割成一个二维数组。

形如：`_.chunk(Array,size)`,size默认是1

```
_.chunk(['a','b','c','d'],2)
```

上面代码表示将`['a','b','c','d']`进行长度为2的分割，分割结果为`[['a','b'],['c','d']]`

### compact

去除数组里面含有否定的项，比如null,0,undefined,NaN,'',false，不改变原来的数组

形如：`_.compact(Array)`

```
let array=[0,1,2,null,'',undefined,NaN]
_.compact(array)
```

上面代码表示结果为`[1,2]`

### concat 

结合其他的数组/数值，不改变原数组

形如：`_.concat(array,value,[values])`

其中array表示原数组,value表示数值，[values]表示数组，在这里，一维数组和数值效果一样。

```
let array=[1]

_.concat(array,2,[3],[[4]])
```
上面代码结果为`[1,2,3,[4]]`，其中`2和[3]`效果是一样的

### difference

找出第一个数组中与其他数组中不相同的项，不改变原数组

形如：`_.difference(array,array1,array2,array3...)`

```
let array=[1,2,3];
let array2=[2,4];
_.difference(array,array2)
```

上面的代码结果为`[1,3]`，是基于array，寻找不相同的项。

### differenceBy

作用跟上面的`difference`一致，但是加了一个参数，让数组的每一项都能按照某一个标准去执行，然后再进行比对，对元素进行迭代。

形如：`_.differenceBy(array,array1,array2...,iteratee)`

```
let array=[1.2,2.2]
let array2=[2.1,2.3]

_.differenceBy(array,array2,Math.floor)
```

上面的代码结果为`[1.2]`，因为`Math.floor`会使得数组的每项变成`[1,2],[2,2]`，再进行比较时，自然只剩下`[1]`,对应的便是`[1.2]`

### differenceWith 

作用跟上面的`difference`一致，但是加了一个参数，遍历每个数组，按照某个比较器进行比较。

形如：`_.differenceBy(array,array1,array2...,comparator)`

```
const array=[{obj1:1},{obj2:2}]
const array2=[{obj2:2}]

_.differenceWith(array,array2,_.isEqual)
```

上面代码结果为`[{obj1:1}]`，其中`_.isEqual`是那个比较器


