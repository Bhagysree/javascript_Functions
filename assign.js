// redeclare vs reassign
// var, let, const

//redeclare
var fullname = "raj"
console.log(fullname)

var a = 10;
var a = 20; //redeclare
console.log(a)

a = 20; //reassign
console.log(a)

// let b = 10;
// let b = 20; //redeclare
// console.log(a)

b = 20; //reassign
console.log(b)

// const c1 = 10;
// const c1 = 20; //redeclare
// console.log(c1)

// c1 = 20; //reassign
// console.log(c1)

//                                  var                    let               const
// reassign                          👍                     👍               👎
//redeclare                          👍                     👎               👎


