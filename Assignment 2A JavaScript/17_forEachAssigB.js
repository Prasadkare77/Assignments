class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Soanli", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`1. Find out the 'TCS' employee details and log only name & company on console.`);
arrayEmployee.forEach((element) => {
    if(element.emp_company=="TCS")
    console.log(`Name: ${element.emp_name}, Company: ${element.emp_company}`);
})

console.log(``);
console.log(`2. Find the employee with salary greater than or  equal 50000 (Log all the employee details on console)`);
arrayEmployee.forEach((elememt) => {
    if (elememt.emp_salary >= 50000) {
        console.log(`Name: ${elememt.emp_name}, ID: ${elememt.emp_id}, Department: ${elememt.emp_dept}, Salary: ${elememt.emp_salary}, Company: ${elememt.emp_company}`); 
    }
})

console.log(``);
console.log(`3. Find the sum of all employee salary and log on console`);
let sum = 0;
arrayEmployee.forEach((elememt) => {
    if(elememt.emp_salary){
        sum = sum + elememt.emp_salary;
    }
})
console.log(`Sum of salary: ${sum}`);

console.log(``);
console.log(`4. Find the average salary and log on console (Avarage = Total Salary / Number of Employees)`);
const average = sum / arrayEmployee.length
console.log(`Avarage salary is : ${average}`);

console.log(``);
console.log(`5. Find the 'IT' and 'HR' department employee whose salary is greater than or equal to 75000 and log complete Details`);
arrayEmployee.forEach((elememt) => {
    if(elememt.emp_dept == "IT","HR" && elememt.emp_salary >= 75000){
        console.log(`Name: ${elememt.emp_name}, ID: ${elememt.emp_id}, Department: ${elememt.emp_dept}, Salary: ${elememt.emp_salary}, Company: ${elememt.emp_company}`);
    }
})
