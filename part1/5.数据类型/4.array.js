// 


// 将 border-left-width 转换成 borderLeftWidth
// 编写函数 camelize(str) 
// 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。
// function camelize(str) {
//     let spliceStr = str.split('-');
//     // console.log(spliceStr);
//     let result = '';
//     spliceStr.forEach((item, index, array) => {
//         if (index == 0) {
//             result += item;
//         } else {
//             let temp = item.slice(0, 1);
//             let temp2 = item.slice(1);
//             // console.log(temp);
//             // console.log(temp2);
//             let tp = temp.toUpperCase() + temp2;
//             result += tp;
//         }
//     });
//     return result;
// }



function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

// let a = camelize("border-left-width");
// console.log(a);


// 写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大小在 a 和 b 之间的元素，并返回它们的数组。
// 该函数不应该修改原数组。它应该返回新的数组。

function filterRange(arr, a, b) {
    return arr.filter((item) => (a <= item && item <= b));
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let b = filterRange(arr, 1, 4);
console.log(b);
console.log(arr);