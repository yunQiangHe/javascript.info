// Object.entries(obj)

let obj = {
    name: "hyq",
    age: 23,
    sayHi() {
        return this.name
    }
};

// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
// 这里，Object.entries 返回键/值对数组：[ ["name","John"], ["age", 30] ]。这就是 Map 所需要的格式。
let objToMap = new Map(Object.entries(obj));
console.log(objToMap); //Map { 'name' => 'hyq', 'age' => 23, 'sayHi' => [Function: sayHi] }


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices);
console.log(typeof prices);