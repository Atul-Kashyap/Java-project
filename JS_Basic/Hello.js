// var x = 10;
// function getNum(){
//     console.log("Hello Js");

// }

// console.log(x);
// getNum();

// Function Hoisting 
// it is because function is already define in memory execution before starting execution of code line by line 

// getNum();
// var x = 10;
// function getNum(){
//     console.log("Hello Js");

// }

// console.log(x);

// x is undefined because it declared in memory but during execution it is called before initialization 

// console.log(x);
// getNum();

// var x = 10;
// function getNum(){
//     console.log("Hello Js");
// }


// here x is undefined and function is printed 
// function is printed because during execution context in memory context complete function is assigned to function name


// console.log(x);
// console.log(getNum);

// var x = 10;
// function getNum(){
//     console.log("Hello Js");
// }


// here we try to explain you the difference between undefined or not defined
// here x is not defined in memory context

// console.log(x);
// console.log(getNum);

// function getNum(){
//     console.log("Hello Js");
// }


var x = 10;
a();
b();


function a(){
    console.log(100);
}


function b(){
    console.log(1000);
}




