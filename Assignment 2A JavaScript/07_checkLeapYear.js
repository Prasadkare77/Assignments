console.log(`Function Expression using if else to check given year is leap year or not.`);
var checkLeapYear = function (leapYear) {
    console.log(`Year is: ${leapYear}`);
    if (leapYear == undefined || leapYear == null || isNaN(leapYear)) {
        console.log(`Invalid Input`);
    } else if(leapYear%4==0){
        console.log(`${leapYear}, is Leap Year.`);
    } else {
        console.log(`${leapYear}, this is not a Leap Year.`);
    }
    console.log(``);
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);