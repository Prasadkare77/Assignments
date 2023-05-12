function stringhandsOn(){
    var str = "  Hey you are doing good, keep it up   ";
    console.log("String:",str);

    var stringLength = str.length;
    console.log("String Length:",stringLength);

    var trimedString = str.trim();
    console.log("Trimmed String:",trimedString,"String Length:",trimedString.length);

    var totalSpaces = stringLength - trimedString.length;
    console.log("Total numbers of extra spaces:",totalSpaces);

    var trimFirstChar = str.trimStart();
    var trimLastChar = str.trimEnd();
    console.log("First character:",trimFirstChar.charAt(0), ",", "Last character:",trimLastChar.charAt(trimLastChar.length-1));
}
stringhandsOn();