console.log('ScriptJS Sourced');
//Set Monthly Cost
let cost = 0;

$(document).ready(onReady);

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
}