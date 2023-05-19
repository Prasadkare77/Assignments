console.log(`Function expression with no return value to check TCS interview eligibility such as,
If Graduation score is greater than equal to percentage 70 OR HSC score is greater than equal percentage 80 OR
SSC score is greater than percentage 90.`);

console.log(``);

var eligibility = function(gradScore,hscScore,sscScore,candidateName){
    console.log(`Name:${candidateName}`);
    console.log(`Graduation Score:${gradScore}, HSC Score:${hscScore}, SSC Score: ${sscScore}`);
    
    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90 ) {
        console.log(`Congrats ${candidateName}, you are eligible for tcs interview.`);
    } else {
        console.log(`Unfortunately ${candidateName}, you are not eligible for interview.`);
    }
    console.log(``);
}
eligibility(80,86,90,"Prasad");
eligibility(70,65,55,"Pratik");
eligibility(60,79,88,"Prashant");
