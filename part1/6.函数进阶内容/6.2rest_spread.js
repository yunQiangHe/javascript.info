// Rest 参数与 Spread 语法

function t(...agrs) {
    // console.log(agrs);
    // console.log(Array.isArray(agrs));  true

    // 有一个名为 arguments 的特殊的类数组对象，该对象按参数索引包含所有参数。
    console.log(arguments)

    // let sum = 0;

    // for (let v of agrs) sum += v;

    // return sum;
}

t(1, 2, 3);