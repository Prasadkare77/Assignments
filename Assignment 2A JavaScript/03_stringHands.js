
function stringHandsOn(){
    var string = "  Hey you are doing good, keep it up   ";

    console.log("1. Print the string as it is on console");
    console.log("String Is:",string);

    console.log("");

    console.log("2. Calculate length of the String");
    var stringLength = string.length;
    console.log("Lenght of String is:",stringLength);

    console.log("");

    console.log("3. Remove the leading and trailing extra spaces and log string on console with it’s length");
    var stringTrim = string.trim();
    console.log("Trimmed String is:",stringTrim);

    console.log("");

    console.log("4. Print the total number extra spaces count that is removed in step 3.");
    var totalSpaces = stringLength - stringTrim.length;
    console.log("Total no of Extra Spaces:",totalSpaces);

    console.log("");

    console.log("5. Print the first and last character on the same line after trim()");
    var firstTrimChar = stringTrim.charAt(0);
    var lastTrimChar = stringTrim.charAt(stringTrim.length-1);
    console.log("First Character is:",firstTrimChar,",", "Last Character is:",lastTrimChar);

    console.log("");

    console.log("6. Print the count of total words available in the string after step 3");
    var totalWords = stringTrim.split(" ");
    console.log("Total Words Available in String:",totalWords.length);

    console.log("");

    console.log("7. Print the index of word “good” from the given string");
    var indexOfGood = stringTrim.indexOf("good");
    console.log(`Index of word "good" is: ${indexOfGood}`);

    console.log("");

    console.log("8. Print the substring starting from index 22, using substring() and slice() ");
    var subString = stringTrim.substring(22,stringTrim.length);
    var sliceString = stringTrim.slice(22,stringTrim.length);
    console.log("Substring Starting from index 22:",subString);
    console.log("Slice String from index 22:",sliceString);

    console.log("");

    console.log("9. Check, is string ends with word “up” after step 3?");
    var stringEndWith = stringTrim.endsWith("up");
    console.log(`String end with "up": ${stringEndWith}`);

    console.log("");

    console.log("10. Check is string starts with word “Hey” after trimming → i.e after step 3 output string value");
    var stringStartWith = stringTrim.startsWith("Hey");
    console.log(`String star with "Hey": ${stringStartWith}`);
}
stringHandsOn();