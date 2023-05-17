console.log(`Function expression with no return value to check TCS interview eligibility such as,
If Graduation score is greater than equal to 70% OR HSC score is greater than equal 80% OR
SSC score is greater than 90%.`);

console.log(``);

var eligibility = function(gradScore,hscScore,sscScore,candidateName){
    console.log(`Name:${candidateName}`);
    console.log(`Graduation Score:${gradScore}, HSC Score:${hscScore}, SSC Score: ${sscScore}`);

    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90 
        ? `Congrats ${candidateName}, you are eligible for tcs interview.` 
        : `Unfortunately ${candidateName}, you are not eligible for interview.`;

    console.log(result); 
    console.log(``);   
}
eligibility(80,86,90,"Prasad");
eligibility(70,65,55,"Pratik");
eligibility(60,79,88,"Prashant");