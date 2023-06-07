class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all the employees from 'Wipro' company.`);
const wiproEmployee = array_employees.filter((employee) => {
    return employee.emp_company == "Wipro";
}).map((employee) => {
    return employee.emp_name;
})
console.log(`Name: ${wiproEmployee}`);

console.log(``);
console.log(`2. Find all the emplyees from 'IT' or 'HR' Dept.`);
const itOrHR = array_employees.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
}).map((employee) => {
    return employee.emp_name;
})
console.log(`Name: ${itOrHR}`);

console.log(``);
console.log(`3. Find all the employees whose emp id's are greater than 50.`);
const empId = array_employees.filter((employee) => {
    return employee.emp_id > 50;
}).map((employee) => {
    return employee.emp_name;
})
console.log(`Name: ${empId}`);

console.log(``);
console.log(`4.Find all the employee whose names start with letter 'A' or 'V' or 'M'`);
const startsWith = array_employees.filter((employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
}).map((employee) => {
    return employee.emp_name;
})
console.log(`Employee Name: ${startsWith} `);

console.log(``);
console.log(`5.Find the Avarage salary of the employee for all the department`);
const empSalary = array_employees.map((employee) => {
    return employee.emp_salary;
})
const sumSalary = empSalary.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(`Total Salary: ${sumSalary}`);
const average = sumSalary / array_employees.length
console.log(`Avarage Salary: ${average}`);

console.log(``);
console.log(`6. Find the average salary for 'IT' department.`);
const itDept = array_employees.filter((employee) => {
    return employee.emp_dept == "IT";
})
const salary = itDept.map((employee) => {
    return employee.emp_salary;
})
const sumIt = salary.reduce((runningTotal,value) => {
    return runningTotal + value;
})
console.log(`Sum of It: ${sumIt}`);
const itAvarage = sumIt / itDept.length;
console.log(`Avarage salary: ${itAvarage}`);