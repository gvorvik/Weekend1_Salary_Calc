console.log('ScriptJS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery Sourced');
    $('#submitButton').on('click', submitButtonClick);
}

function submitButtonClick() {
    let first = $('#firstNameInput');
    let last = $('#lastNameInput');
    let id = $('#idInput');
    let title = $('#titleInput');
    let salary = $('#salaryInput');
    
    if(first.val() === '' || last.val() === '' || id.val() === '' 
    || title.val() === '' || salary.val() === '') {
       return alert('You must complete all the fields!');
    }

    $('tbody').append(`<tr>
        <td>${first.val()}</td>
        <td>${last.val()}</td>
        <td>${id.val()}</td>
        <td>${title.val()}</td>
        <td>${salary.val()}</td>
        </tr>`);   
}