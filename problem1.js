/*Problem 1
Voting Eligibility: Write a program that checks whether a person can vote.
To be eligible, a person must be at least 18 years old and a citizen of the
country.
*/
var age = 22
var citizen = "india"

if(age >= 18 && citizen == "india"){
    console.log("you are eligible for vote")
}
else{
    console.log("you are not eligible for vote")
}