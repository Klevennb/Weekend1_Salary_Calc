$( document ).ready(function () {
    console.log('in jquery');
    
    $('#submit-button').on('click', appendFunction);
    // $('#submit-button').on('click', changeBudget);
})

function appendFunction() {
    console.log('in appendFunction');
    let firstName = $( '#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let positionTitle = $('#position-title').val();
    let annualSalary = $('#ann-salary').val();
    $('table').append('<tr> <td>' + firstName + '</td> <td>' + lastName + '</td> <td>' + idNumber + '</td> + <td>' + positionTitle + '</td> + <td>' + annualSalary + '</td></tr>');
    $('.inputs').val('');
    annualSalary = annualSalary / 12;
    console.log(annualSalary);
    monthlyBudget = monthlyBudget - annualSalary;
    $('#total-monthly').empty().append('<h3>Total Monthly: $</h3>', monthlyBudget);
}

let monthlyBudget = 15000;
// function changeBudget() {
//     let annualSalary = $('#ann-salary').val();
//     annualSalary = annualSalary/12;
//     console.log(annualSalary);
    
//     monthlyBudget = monthlyBudget - annualSalary;
//     $( '#total-monthly').empty().append( '<h3>Total Monthly: $</h3>', monthlyBudget);

// }