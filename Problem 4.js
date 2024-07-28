/*Problem 4
Day 7: Javascript Logical Operator 2
Check Vowel and Consonant: determine if a given character is a vowel or a
consonant. If the character is a lowercase or uppercase vowel (a, e, i, o, u,
A, E, I, O, U), consider it a vowel; otherwise, consider it a consonant.
*/
// Using  OR operator (||)

var char = "e"

if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    console.log( char," character is a vowel ")
}
else{
    console.log(char,"character is a consonant ")
}
