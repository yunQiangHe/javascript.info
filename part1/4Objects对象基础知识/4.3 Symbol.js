// 对象的属性键只能是字符串类型或者 Symbol 类型

// “Symbol” 值表示唯一的标识符。

// id 是 symbol 的一个实例化对象
let id = Symbol();

// id 是描述为 "id" 的 Symbol
let id = Symbol("id");

// Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，
// 它们的值也是不同。描述只是一个标签，不影响任何东西。

let id1 = Symbol("id");
let id2 = Symbol("id");

// alert(id1 == id2); // false

// Symbol 不会被自动转换为字符串