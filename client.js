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
    $('#employee-table').on('click', '#delete-button', deleteEmployee);
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
    $( 'input' ).val('');
    appendToTable();
} //end pushToEmployees

function appendToTable() {
    console.log('in appendToTable');
    
    $('table').empty(); //emptys table
    $('#employee-table').append('<th>First Name</th> <th>Last Name</th> <th>Id Number</th> <th>Title</th> <th>Annual Salary</th>'); //adds table headers
    for (let i = 0; i < employees.length; i++) {
        $('#employee-table').append('<tr><td>' + employees[i].firstName + '</td><td>' + employees[i].lastName + '</td><td>' + employees[i].idNumber + '</td><td>' + employees[i].title + '</td><td>' + employees[i].annualSal + '</td><td>' + '<button id="delete-button">Delete Employee</button>' + '</td></tr>'); //adds input data
    } //end for loop
    deductFromBudget();
} //end appendToTable

function deductFromBudget() {
    console.log('in deductFromBudget');
    let monthlyBudget = 0;
    for (let i = 0; i < employees.length; i++) {
        monthlyBudget += employees[i].annualSal/12;
    }  //end for loop
    $('#monthly-budget').empty().append('<h2>Monthly Budget: $'+monthlyBudget.toFixed(2)+'</h2>');
    if (monthlyBudget > 20000) {
        $('#monthly-budget').css('color', 'red');
    }
} // end deductFromBudget

function deleteEmployee() {
    console.log('in delete');
    $(this).parent().parent().remove();
}