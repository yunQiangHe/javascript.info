// Map and Set（映射和集合）

let map = new Map();  //创建 map
// map.set(key, value) —— 根据键存储值。

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键

// map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。

// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));


// map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
console.log(map.has('1'));
console.log(map.has('xxx'));

// map.delete(key) —— 删除指定键的值。
map.delete(1);
console.log(map); //Map { '1' => 'str1', true => 'bool1' }
// map.size —— 返回当前元素个数。
console.log(map.size); //2
// map.clear() —— 清空 map。
map.clear();
console.log(map);//Map {}
console.log(map.size); //0


