//Variables for attack
var num = Math.ceil(Math.random() * 100);
var hit = "Hit!!!";
var miss = "Miss...";

//Shows value of num after randomization
console.log(num);

//Response for num variable value
if (num <= 25) {
    console.log(miss);
} else {
    console.log(hit);
};
