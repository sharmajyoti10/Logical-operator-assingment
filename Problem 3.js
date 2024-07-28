/*Problem 3
Online Shopping Discount: Build an online shopping website that discounts
orders. Customers are eligible for the discount if they purchase at least two
items (numItems >= 2) and the total order value exceeds 5000
(totalOrderValue > 5000). */

var numItems = 4
var totalOrderValue = 6000

if(numItems >= 2 && totalOrderValue > 5000 ){

    console.log("congracts, you are eligible for the discount")
}
else{
    console.log("sorry, you are not eligible for the discount")
}