// JavaScript Errors - Throw and Try to Catch
// 1 -- try -- statement lets you test a block of code for errors
// 2 -- catch -- statement lets you handle the error. 
// 3 -- throw -- statement lets you create custom errors. 
// 4 -- finally -- statement lets you execute code.

// First example script in html
/*
<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>
*/

// Second example

/*
<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
</script>
*/

// Error name values

// 1 -- EvalError An error has occurred in the eval() function
// 2 -- RangeError  A number "out of range" has occurred
// 3 -- ReferenceError  An illegal reference has occurred
// 4 -- SyntaxError A syntax error has occurred
// 5 -- TypeError A type error has occurred
// 6 -- URIError  An error in encodeURI() has occurred

// Javascript Scope
// Two types of scope:
// 1 -- local scope
// 2 -- global scope 

/*
function myFunction() {
    var carName = "Volvo";
}
// carName is local variable, if we will use it in global scope it throws following message: carName is undefined

console.log("global scope " + carName);
*/

// global scope example
var car1 = "BMW 1 Series";
function myFunc() {
    return console.log(car1);
}
console.log(myFunc());

// all variables should be declared at the beginning of every scope, because javascript declarations are Hoisted

"use strict";
// "use strict";  --- defines that javascript code should be executed in strict mode
