/*Problem 5
Temperature Range: determine if a given temperature is within a
comfortable range for outdoor activities. If the temperature is between 65°F
and 85°F (temperature >= 65 && temperature <= 85), it's considered
comfortable. If it's outside this range, it's either too hot or too cold for
outdoor activities.
 */

var temp = 90

if(temp >= 65 && temp <= 85){
    console.log("temperature is comfortable for outside activities")
}
else{
    console.log("temperature is  either too hot or too cold for outdoor activities.")
}