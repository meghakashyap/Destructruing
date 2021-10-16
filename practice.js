// var myName="kumar"
// console.log({...myName})

// var list_ = [3,4,5,5,65,5,6,6,7,7,7,1,2,4]
// var res = new Set(list_)
// var a = [...res]
// console.log(a)

// swapping
// var a = 10, b= 20,c=30;
// [a,b,c] = [b,c,a]
// console.log(a,b,c)

// rest parameter
// var array = [1,2,3,4,5,6,7,8,9];
// const [ a,b,c,...d] = array;
// console.log(a,b,c,d)


// skip  return value
// var array = [1,2,3,4,5,6,7,8,9];
// const [ a,b, , , , , , ,c] = array;
// console.log(a,b,c)

// copy the object
// const  a = {1:"a",2:"b",3:"c"}
// const b = {4:"v",5:"b"}
// console.log({...a,...b})

// object destructuring assign varuavle
// const  e = {a:"a",b:"b",3:"c"}
// const f = {4:"v",5:"b"}
// const {a,b,...c} = e
// console.log(a,b,c)


// const  e = {a:1,b:2,c:3} 
// const {a,b} = e
// console.log(a,b)


// new variable name default parameter
// const {a: aa , b: bb = 5} = {a: 3 ,b:90};
// console.log(aa); // 3
// console.log(bb); // 5


// extracting properties
// ({a: aa , b: bb = 5} = {a: 3 ,b:90});
// console.log(aa); // 3
// console.log(bb); // 5



// basic assigning in 
// const user = {
//     id: 42,
//     isVerified: true
// };

// const {id, isVerified} = user;

// console.log(id); // 42
// console.log(isVerified); // true

// new variable name
// const o = {p: 42, q: true};
// const {p: foo, q: bar} = o;

// console.log(foo); // 42
// console.log(bar); // true

// default value
// const {a =10 , b = 30} = {a:4}
// console.log(a,b)


// var a = [1,2,3,4,54,5]
// var [b,c,...d] = a
// console.log(b,c,d)

// var a = "megha"
// console.log({...a})


const {a,...b} = {a:2,b:4,c:4};
console.log(a,b)
