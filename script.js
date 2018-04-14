console.log('ScriptJS Sourced');
//Set Monthly Cost
let cost = 0;

$(document).ready(onReady);

function onReady() {
    console.log('JQuery Sourced');
    $('#submitButton').on('click', submitButtonClick);
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
    
    //
    appendSalary();

    //Reset the values in the inputs
    $first.val('');
    $last.val('');
    $id.val('');
    $title.val('');
    $salary.val('');
    
    console.log(cost);
}//End submitButtonClick

function appendSalary() {
    let $salary = $('#salaryInput');
    cost += parseInt($salary.val())/12;
    $('#monthlyCost').text(`Total Monthly: $${cost}`);
}