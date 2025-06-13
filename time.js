//setTimeout & setInterval

//setTimeout:
//executes a function once after a delayed time given time in millisecds
// 1000 => 1sec
// 5000 => 5sec

function global() {
    console.log("hello")
}
// //it takes 2 parameters
// //1st function
// // 2nd time in millisec
// //it will run only once
// setTimeout(global, 10000)

// let sec = 5
// setTimeout(global, sec * 10000)

//setInterval
// executes a function repeatedly at given time in millisec
// and to stop is... use ctrl + c
// it will execute the function multi times
setInterval(global, 1)
