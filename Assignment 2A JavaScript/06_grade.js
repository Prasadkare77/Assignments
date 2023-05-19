console.log(`Design a grade system with function name as -> gradeCalculation().`);
console.log(``);

function gradeCalculation (marks) {
    console.log(`-> Marks is: ${marks}`);
    if (marks == undefined || marks == null || isNaN(marks)) {
        console.log(`Invalid marks, Please provide the valid marks.`);
    } else if (marks <=0 || marks > 100) {
        console.log(`Invalid marks, Please provide the valid marks.`);
    } else if (marks >= 90) {
        console.log(`Funtastic marks: ${marks}, Your Grade is A+.`);
    } else if (marks >= 75 && marks <=90) {
        console.log(`Excellent marks: ${marks}, Your Grade is A.`);
    } else if (marks >= 60 && marks <= 75) {
        console.log(`Good marks: ${marks}, Your Grade is B.`);
    } else if (marks >= 30 &&marks <= 50) {
        console.log(`Marks is: ${marks}, Your Grade is C, Need improvement.`);
    }else{
        console.log(`Marks is: ${marks}, Your Fail, Need improvement.`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);