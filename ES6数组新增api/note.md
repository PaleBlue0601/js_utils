# ES6数组新增api

### .from()
  * from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
  * 示例
    ```
    console.log(Array.from('foo'));
    // expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], x => x + x));
    // expected output: Array [2, 4, 6]

    // 应用:数组去重合并
    function combine() {
      let arr = [].concat.apply([], arguments) //没有去重复的新数组 
      return Array.from(new Set(arr))
    }
    let m = [1, 2, 2],n = [2,3,3]
    console.log(combine(m, n))
    ``` 
### .of()
  * of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
  * 示例
    ```
    let t1 = Array.of(4) //[4]
    let t2 = Array.of(1,2,3,4) //[1, 2, 3, 4]
    let t3 = Array.of(undefined); // [undefined]
    console.log(t1)
    console.log(t2)
    console.log(t3)
    ```
### .copyWithin()
  * copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
  * 示例
    ```
    let copy_arr
    copy_arr = [1, 2, 3, 4, 5].copyWithin(-2) // [1, 2, 3, 1, 2]
    console.log(copy_arr)
    copy_arr = [1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
    console.log(copy_arr)
    copy_arr = [1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
    console.log(copy_arr)
    copy_arr = [1, 2, 3, 4, 5].copyWithin(-2, -3, -1) // [1, 2, 3, 3, 4]
    console.log(copy_arr)
    ```
### .entries() 
  * entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
  * 示例
    ```
    const array = ['a', 'b', 'c'];
    const iterator1 = array.entries();
    console.log(iterator1.next().value);// expected output: Array [0, "a"]
    console.log(iterator1.next().value);// expected output: Array [1, "b"]
    ```
### .fill()
  * fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
  * 示例
    ```
    const array1 = [1, 2, 3, 4];
    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));// expected output: [1, 2, 0, 0]
    // fill with 5 from position 1
    console.log(array1.fill(5, 1));// expected output: [1, 5, 5, 5]
    console.log(array1.fill(6));// expected output: [6, 6, 6, 6]
    ```
### .find()
  * find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  * 示例
    ```
    const array2 = [5, 12, 8, 130, 44];
    const found = array2.find(element => element > 10);
    console.log(found);// expected output: 12
    ```
### .findIndex()
  * findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
  * 示例
    ```
    const array3 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array3.findIndex(isLargeNumber));// expected output: 3
    ```
### .includes()
  * includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
  * 示例
    ```
    let arr=[1,2,234,'sdf',-2];
    arr.includes(2);// 结果true，返回布尔值
    arr.includes(20);// 结果：false，返回布尔值
    arr.includes(2,3)//结果：false，返回布尔值
    ```
### .keys()
  * keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
  * 示例
    ```
    const array4 = ['a', 'b', 'c'];
    const iterator2 = array4.keys();
    for (const key of iterator2) {
      console.log(key);
    }
    // expected output: 0
    // expected output: 1
    // expected output: 2
    ```
### .values()
  * values() 方法返回一个包含数组中每个值的Array Iterator对象。
  * 示例
    ```
    const array5 = ['a', 'b', 'c'];
    const iterator3 = array5.values();
    for (const value of iterator3) {
      console.log(value);
    }
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
    ```