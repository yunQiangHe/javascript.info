// let str = "Hello\n world";
// console.log(str.length); //12

// console.log(str[2]); //l
// console.log(str[str.length - 1]); //d
// console.log(str[100]); // undefined

// console.log(str.charAt(2)); //l
// console.log(str.charAt(str.length - 1)); //d
// console.log(str.charAt(100)); //空字符 ‘’ 

// for (const i of str) {
//     console.log(i);
// }


let str = 'Widget with id';

console.log(str.indexOf('i')); //1
console.log(str.indexOf('i', 2)); //8
console.log(str.indexOf('g')); //3
console.log(str.indexOf('X')); //-1

console.log(str.includes('A')); //false
console.log(str.startsWith('A')); //false
console.log(str.startsWith('W')); //true
console.log(str.endsWith('W')); //false
console.log(str.endsWith('d')); //true