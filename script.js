console.log('ScriptJS Sourced');
//Set Monthly Cost
let cost = 0;

//Setup for array of each employee added to DOM
let employees = [];
class Employee {
    constructor(first, last, id, title, salary) {
        this.firstName = first;
        this.lastName = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}

$(document).ready(onReady);



//Functions To Be Hoisted

function onReady() {
    console.log('JQuery Sourced');
    $('#submitButton').on('click', submitButtonClick);
    $('#deleteButton').on('click', deleteEmployee);
}

function submitButtonClick() {
    //Set variables for inputs
    let $first = $('#firstNameInput');
    let $last = $('#lastNameInput');
    let $id = $('#idInput');
    let $title = $('#titleInput');
    let $salary = $('#salaryInput');

    //Make sure every input is full
    if($first.val() === '' || $last.val() === '' || $id.val() === '' 
    || $title.val() === '' || $salary.val() === '') {
       return alert('You must complete all the fields!');
    }

    //Append the values to the DOM
    $('tbody').append(`<tr>
        <td>${$first.val()}</td>
        <td>${$last.val()}</td>
        <td>${$id.val()}</td>
        <td>${$title.val()}</td>
        <td>$${$salary.val()}</td>
        </tr>`);
    
    //Update the monthly cost
    appendSalary();

    //Create employee and add to array
    let employee = addEmployee();
    employees.push(employee);

    //Reset the values in the inputs
    $first.val('');
    $last.val('');
    $id.val('');
    $title.val('');
    $salary.val('');
}//End submitButtonClick

//Function to put correct salary number under Monthly Cost and append to DOM
function appendSalary() {
    let monthlyCost = parseFloat($('#salaryInput').val()/12);
    cost += monthlyCost;
    if (cost > 20000) {
        $('#monthlyCost').css('color', 'red');
    }
    $('#monthlyCost').text(`Total Monthly: $${cost.toFixed(2)}`);
}//end appendSalary

//Function to delete last employee
function deleteEmployee() {
    $('tbody').children().last().remove();
    employees.pop();
}//end deleteEmployee

//Function to create new Employee object
function addEmployee() {
    let employee = new Employee($('#firstNameInput').val(), $('#lastNameInput').val(), 
        $('#idInput').val(), $('#titleInput').val(), $('#salaryInput').val());
    return employee;
}//end addEmployeeToArray