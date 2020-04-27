function sayHiBye(firstName, lastName) {

    // 辅助嵌套函数使用如下
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
}

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter())