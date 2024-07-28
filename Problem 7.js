/*Problem 7
Login Authentication: program for a website login system. Users should be
authenticated if they enter the correct username and password. If the user
enters the wrong password (enteredPassword !== correctPassword),
display an error message. Use the logical NOT operator to perform this
check. */

//not operator 
//Login Authentication :
var correctUsername = "admin"
var correctPassword = "12345"

var enteredUsername = "admin"
var enteredPassword = "12345"

if(correctUsername !== enteredUsername && correctPassword !== enteredPassword){
    console.log("Invalid username and password")
}
else{
  console.log("Logged In Successfully")
}