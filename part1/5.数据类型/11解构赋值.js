// 解构赋值

// let [a, b] = [1, 2];
// console.log(a)
// console.log(b)
// // 等号右侧可以是任何可迭代对象
// let [a1, b1] = 'abc';
// console.log(a1)
// console.log(b1)

let user = {
    name: "John",
    age: 30
};

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`);
// }

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;
console.log(`title:${title},width:${width},height:${height}`)

let { title: t, width: w, height: h, nv: v = 999 } = options;
console.log(`把一个属性赋值给另一个名字的变量title:${t},width:${w},height:${h},nv:${v}`)


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// 新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。
function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (let [key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            maxName = key;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));