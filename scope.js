//scope.js
// there are 3 types of scoping in js
//1. bLock scope
//2. function scope
//3. global scope

/*Block scope:
block means code access only in braces
example : {}


//                         var        let             const    
// inside of block          👍          👍              👍
//outside of block          👍          👎              👎

// inside of block in var : */
{
 var x = 10;
 var y = 20;
 console.log(x)
 console.log(y)
}
// inside of block in let :
{
 let x = 10;
 let y = 20;
 console.log(x)
 console.log(y)
}
// inside of block in const :
{
 const x = 10;
 const y = 20;
 console.log(x)
 console.log(y)
}


// outside of block in var :
{
 var x = 10;
 var y = 20;

}
console.log(x)
 console.log(y)

// outside of block in let :
// {
//  let num1 = 10;
//  let num2 = 20;
 
// }
// console.log(num1)
//  console.log(num2)
// // outside of block in const :
// {
//  const a = 10;
//  const b = 20;
 
//}
// console.log(a)
//  console.log(b)

 
 //  function scope                        var        let             const    
// inside of function                       👍         👍              👍
//outside of function                       👎         👎              👎

function g() {
 var s1 = 10;
 var s2 = 20;
 console.log(s1, s2)
} g()

function l() {
 let l1 = 10;
 let l2 = 20;
 console.log(s1, s2)
} g()

function h() {
 const h1 = 10;
 const h2 = 20;
 console.log(s1, s2)
} g()

//outside var
//  function m() {
//  var m1 = 10;
//  var m2 = 20;

// }
// console.log(m1, m2)

// function m() {
//  var m1 = 10;
//  var m2 = 20;

// }
// console.log(m1, m2)

// function m() {
//  const m1 = 10;
//  const m2 = 20;

// }
// console.log(m1, m2)


// global scope

//  function scope                        var        let             const    
// inside of scope                       👍         👍              👍
//outside of scope                       👍         👍              👍

var w1 = 10;
let w2 = 20;
const w3 = 30;
 console.log(w1, w2, w3)
 {
    console.log(w1, w2, w3)
 }

 function sayCheck(){
    console.log(w1, w2, w3)
 }sayCheck()