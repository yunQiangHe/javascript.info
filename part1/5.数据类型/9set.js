// Set 是一个特殊的类型集合 － “值的集合”（没有键），它的每一个值只能出现一次。

// 例如，我们有客人来访，我们想记住他们每一个人。但是已经来访过的客人再次来访，不应造成重复记录。每个访客必须只被“计数”一次。
// new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// set.add(value) —— 添加一个值，返回 set 本身
// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set.size —— 返回元素个数。
console.log(set.size) //3

// set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
// set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
// set.clear() —— 清空 set。

for (let user of set) {
    // console.log(user.name)
}

let set2 = new Set(["oranges", "apples", "bananas"]);
for (let k of set2) {
    // console.log(k);
}
// 注意一件有趣的事儿。forEach 的回调函数有三个参数：一个 value，然后是 同一个值 valueAgain，最后是目标对象。没错，同一个值在参数里出现了两次。
set2.forEach((value, valueAgain, set) => {
    // console.log(value)
    // console.log(valueAgain)
    // console.log(set);
})