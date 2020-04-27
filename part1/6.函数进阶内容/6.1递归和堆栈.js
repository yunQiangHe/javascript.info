// 递归和堆栈

// 1.递归（recursion）

// 当一个函数解决一个任务时，在解决的过程中它可以调用很多其它函数。
// 在部分情况下，函数会调用 自身。这就是所谓的 递归。

// 简单起见，让我们写一个函数 pow(x, n)，它可以计算 x 的 n 次方。换句话说就是，x 乘以自身 n 次

// 1迭代思路：使用 for 循环：
/*
function pow(x, n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
*/
// 2递归思路：简化任务，调用自身：

function pow1(x, n) {
    return (n == 1) ? x : (x * pow1(x, n - 1));
}

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// console.log(pow(2, 3)); //8
// 编写一个函数 fib(n) 返回第 n 个斐波那契数。
// 1.递归
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


// 另一个选择就是不使用递归，而是使用完全不同的基于循环的算法。

function fibLoop(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibLoop(7));
