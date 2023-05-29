
let professor = {
    profId: 03,
    profName: "Elon Musk",
    deparment: "Computer",
    subject: "Data Structures",
    collegeName: "Sinhgad",
    address: "Pune",
    degrees: {
        diploma: "Computer Science",
        engineering: "CSC",
        master: "Theory of computation",
        PHD: "Adv Computing",

    },
    certificates: ['Certificate in IFE Course','Certificate in Adv Programming'],
    allDeg: function(){
        let allDegree = `All Degrees Are-> Diploma: ${this.degrees.diploma}, Enginerring: ${this.degrees.engineering}, Masters: ${this.degrees.master}, PHD: ${this.degrees.PHD}`;
        return allDegree;
    }
};

console.log(`3. Array of Certificate`);
console.log(professor.certificates);

console.log(`4. Add function as a value to concat all degrees`);
profDegree = professor.allDeg();
console.log(profDegree);

console.log(`5. Try to add ne property totalExperience`);
professor.totalExperience = "14 Years";
console.log(`Total Experience is: ${professor.totalExperience}`);

console.log(`6. Modify Existing property (Address)`);
professor.address = "Mumbai";
console.log(`Modified Address is: ${professor.address}`);

console.log(`7. Add one new Certificate`);
professor.certificates.push( "Oracle Certified");
console.log(professor.certificates);

console.log(`8. Last Element of the array`);
let lastElement = professor.certificates[2];
console.log(lastElement);


console.log(professor);
console.table(professor);