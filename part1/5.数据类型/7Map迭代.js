// map.keys() —— 遍历并返回所有的键（returns an iterable for keys），
// map.values() —— 遍历并返回所有的值（returns an iterable for values），
// map.entries() —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个。


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

let keys = recipeMap.keys();
let values = recipeMap.values();
let entries = recipeMap.entries();
console.log(keys);
console.log(values);
console.log(entries);
// [Map Iterator] { 'cucumber', 'tomatoes', 'onion' }
// [Map Iterator] { 500, 350, 50 }
// [Map Entries] {
//     [ 'cucumber', 500 ],
//     [ 'tomatoes', 350 ],
//     [ 'onion', 50 ]
//   }

for (let k of keys) {
    console.log(k)
}

for (let v of values) {
    console.log(v)
}
for (let e of entries) {
    console.log(e)
}

// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); 
    // cucumber: 500
    // tomatoes: 350
    // onion: 50
});

