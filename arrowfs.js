
//arrow function:
function sayBye(){
    console.log("bye")
}
sayBye()

//how to convert simple to arrow
//1. remove function key word and add let.
//2. add = to sign after function name
// 3. add => sign after ()

// arrow function
let sayHello = () => {
    console.log("hello")
}
sayHello()


let fname = "bhagya"
let age = "20"
let sayName = () => {
    console.log(`my name is ${fname} and my age is ${age}`)
}


sayName()

sayHello1()
let sayHello1 = () => {
    console.log("hello")
}
sayHello()
//simple function support hosting but arrow function it does not allow.
// arrow function doesnot support hoisting.