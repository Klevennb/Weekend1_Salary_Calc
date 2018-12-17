console.log('in js');
class Employee {
    constructor(firstName, lastName, idNumber, title, annualSal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.annualSal = annualSal;
    }
} //end Employee
let employees = [];

$(document).ready(function () {
    console.log('in jquery');
    $('#submit-button').on('click', pushToEmployees);
}); //end .ready

function pushToEmployees() {
    console.log('in pushToEmployees');
    let fName = $('#input-first').val();  //gathers inputs
    let lName = $('#input-last').val();
    let idNum = $('#input-id').val();
    let arrTitle = $('#input-title').val();
    let anSal = $('#input-annual').val();
    let newEmp = new Employee(fName, lName, idNum, arrTitle, anSal);  //makes new Employee object
    employees.push(newEmp);  //pushes to array
    appendToTable();
} //end pushToEmployees

function appendToTable() {
    $('table').empty(); //emptys table
    $('#employee-table').append('<th>First Name</th> <th>Last Name</th> <th>Id Number</th> <th>Title</th> <th>Annual Salary</th>'); //adds table headers
    for (let i = 0; i < employees.length; i++) {
        $('#employee-table').append('<tr><td>' + employees[i].firstName + '</td><td>' + employees[i].lastName + '</td><td>' + employees[i].idNumber + '</td><td>' + employees[i].title + '</td><td>' + employees[i].annualSal + '</td></tr>') //adds input data
    } //end for loop
    deductFromBudget();
} //end appendToTable

function deductFromBudget() {


} // end deductFromBudget



// class Employee{
//     constructor(firstName, lastName,idNumber, positionTitle, annualSalary){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.idNumber = idNumber;
//         this.positionTitle = positionTitle;
//         this.annualSalary = annualSalary;
//     }
// }

// let employees =[];

// $( document ).ready(function () {
//     console.log('in jquery');
    
//     $('#submit-button').on('click', appendFunction);
//     // $('#submit-button').on('click', changeBudget);
// })
// function collectInput(firstName, lastName, idNumber, positionTitle, annualSalary) {
//     function addToEmployees(firstName, lastName, idNumber, positionTitle, annualSalary) {
//         employees.push(new Employee(firstName, lastName, idNumber, positionTitle, annualSalary))
//     } //end addToEmployees
//     let empFirstName = $('#first-name').val();  //takes input values
//     let empLastName = $('#last-name').val();
//     let empIdNumber = $('#id-number').val();
//     let empPositionTitle = $('#position-title').val();
//     let empAnnualSalary = $('#ann-salary').val();
//     addToEmployees(empFirstName, empLastName, empIdNumber, empPositionTitle, empAnnualSalary);
   
// } //end collectInput

// function appendFunction() {
//     console.log('in appendFunction');
//     for (let i = 0; i < employees.length; i++) {
//         const element = employees[i];
//         $('table').append('<tr> <td>' + employees[i].firstName + '</td> <td>' + employees[i].lastName + '</td> <td>' + employees[i].idNumber + '</td> + <td>' + employees[i].positionTitle + '</td> + <td>' + employees[i].annualSalary + '</td></tr>');  //appends to the table
//     }
//     $('.inputs').val(''); //emptys inputs
//     annualSalary = annualSalary / 12;  
//     console.log(annualSalary);
//     monthlyBudget = (monthlyBudget - annualSalary).toFixed(2);  //makes it only display 2 decimals
//     $('#total-monthly').empty().append('<h3>Total Monthly: $</h3>', monthlyBudget);
//     if (monthlyBudget < 0) {
//         $('#total-monthly').css('color','red');
//     }
// }

// let monthlyBudget = 15000;
// // function changeBudget() {
// //     let annualSalary = $('#ann-salary').val();
// //     annualSalary = annualSalary/12;
// //     console.log(annualSalary);
    
// //     monthlyBudget = monthlyBudget - annualSalary;
// //     $( '#total-monthly').empty().append( '<h3>Total Monthly: $</h3>', monthlyBudget);

// // }