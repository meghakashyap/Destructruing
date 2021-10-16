function f() {
    return [1, 2,5,6, 3,9];
  }
  
  const [a, , , , ,b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1

var ram="Megha"
console.log([...ram])

({a,b,...c}={a:4,b:5,c:7,d:9,k:90})
console.log(a,b,c);

const {l,m} = {l:0,h:9,m:90}
console.log(l,m)