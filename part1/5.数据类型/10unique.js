// 创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
}

let result = unique(values);
console.log(result);