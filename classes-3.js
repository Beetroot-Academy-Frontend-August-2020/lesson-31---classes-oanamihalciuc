/* Execute an Employee class that describes an employee and demonstrate an array of employee objects. */

class Employee {
    firstName;
    lastName;
    age;
    department;
    yearOfEmployment;
    constructor(firstName, lastName, age, department, yearOfEmployment) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.department = department;
    this.yearOfEmployment = yearOfEmployment;
    }
}

var employee1 = new Employee('Oana', 'Mihalciuc', 27, 'Supply Chain', 2020);
var employee2 = new Employee('Ana', 'Johanson', 30, 'Finance', 2018 );

let array = [];
array[0] = employee1;
array[1] = employee2;

console.log(array);

// I am not sure if this is what we were supposed to do...