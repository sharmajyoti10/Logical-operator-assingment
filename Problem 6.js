/*Problem 6
Dinner Options: decide where to have dinner with your family. If your
favorite restaurant has a discount (isSpecialOffer) or you're craving pizza
(cravingPizza), choose one of those options; otherwise, cook dinner at
home. Use the OR operator*/

var discount = "specialoffer"
var craving = "cravingPizza"

if(discount == "specialoffer" || craving == "cravingPizza"){
    console.log("let's dinner out")
}
else{
    console.log("Cook dinner at home")
}