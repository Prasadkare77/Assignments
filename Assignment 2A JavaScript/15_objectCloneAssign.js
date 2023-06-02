console.log(`1. Shallow Clone Array`);
const arrayNum = [20,3,4,56,90,400,49];

const arrayNumClone = arrayNum;
arrayNumClone.push(55,66);
console.log(`Original Array: ${arrayNum}`);
console.log(`Shallow Cloned Array: ${arrayNumClone}`);

console.log(``);

console.log(`2. Deep Clone Array`);
const arrayNumCloneD = [...arrayNum];
arrayNum.push(10,25);
console.log(`Original Array: ${arrayNum}`);
console.log(`Deep Cloned Array: ${arrayNumCloneD}`);

console.log(``);

console.log(`3. Merge Array using spread operator`);
const arrayEven = [2,30,14,8];
console.log(`Array 1: ${arrayEven}`);
console.log(`Array 2: ${arrayNum}`);
//const mergeArray = [...arrayEven.concat([...arrayNum])];
const mergeArray = [...arrayEven, ...arrayNum];
console.log(mergeArray);

 console.log(``);

 console.log(`4. Employee Info`);
 const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    adress: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch Pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", " 1800-4567 32", " +91- 9096 5678 77"]
 }
 console.log(``);
 console.log(`Address`);
 console.log(employee_info.adress.locality);
 console.log(`City: ${employee_info.adress.city}, State: ${employee_info.adress.state}, Country: ${employee_info.adress.country}`);
 console.log(`Mobile No: ${employee_info.mobiles}`);

 console.log(``);

 const deepClonedEmployee = JSON.parse(JSON.stringify(employee_info));
 deepClonedEmployee.salary.july_month = "80,000INR";
 console.log(`6(a). Updated Salary`);
 console.log(employee_info.salary);
 console.log(deepClonedEmployee.salary);

 console.log(``);

 employee_info.adress.country = "United Kingdom";
 console.log(`6(b). Country`);
 console.log(employee_info.adress);
 console.log(deepClonedEmployee.adress);


 
