//Asking for Job, Name and whether they like or not
var name = prompt("Hi, What's your name?");

var job = prompt(`Hi, ${person}! What's your Job'?`);

var likeIt = prompt(`Interesting! Do you love being a ${job}?`);

if (likeIt === 'yes' || likeIt === 'Yes' || likeIt === 'YES') {
    likeIt = "does"
}else {
    likeIt = "does not"
}
console.log(`${name} is a ${job} and ${doYouLikeIt} like it!`);

// Allowing the User to choose a color
var name = prompt("Hello! What is your name?");
var color = prompt(`Hello ${name}, Choose a color. Red, Green, or Yellow`);

if (color === 'Red' || color == 'red' || color =='RED') {
    console.log ("You chose RED");

} else if (color === 'Green' || color === 'green' || color == 'GREEN'){
    console.log ("You chose GREEN");

} else if (color === 'Yellow' || color === 'yellow' || color == 'YELLOW') {
    console.log ("You chose YELLOW");

} 
console.log(`${name} you chose the color ${color}`);

//choosing the return value depending on the number
function numSum(num) {
    if (num < 5) {
        return("Tiny");
    }else if (num < 10) {
        return("Small");
    }else if(num < 15) {
        return("Medium");
    }else if(num < 20) {
        return("Large");
    }else if(num === 20) {
        return("Huge");
    }
}
    console.log(numSum(14));
//counting how much the user makes depending on how much the user works
    var name = prompt("Hi, What is your name?");
    var payRate = prompt("Whats your pay rate?")
    var hours = prompt("How many hours do you work?")

    var finalPay;

    if (hours > 40 ) {
        finalPay = (payRate * 1.5) * hours
    }else {
        finalPay = payRate * hours
    }
    console.log(`${name} worked a total of ${hours} receiving a pay of $${finalPay}.`);