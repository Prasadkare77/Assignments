console.log(`1. Write a function voteEligibility() with one ar-> age to check whether he or she is eligible for
voting or not, Then accordingly disply messege on consol, don't return the value.`);

console.log(``);

function voteEligibility(age){
    console.log(`Age is: ${age}`);
    if ((age == undefined || age == null) || (age == 0 || age < 0 || age > 120)) {
        console.log(`Invalid data.`);
        
    } else {
        if (age < 18) {
            console.log(`You are not eligible for vote.`);
        } else {
            console.log(`You are Eligible for Vote.`);
        }
    }
    console.log(``);
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);