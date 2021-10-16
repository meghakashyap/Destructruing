const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true

// assign without declaration
let a, b;

({a, b} = {a: 1, b: 2});













