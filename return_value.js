function f() {
    return [1, 2,9,0];
  }
  
let a, b;
[a, ...b] = f();
console.log(a); // 1
console.log(b); // [2,9,0]

// You can also ignore all returned values:

[,,] = f();
