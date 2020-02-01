console.log('test test test ');

$(document).ready(onReady);

let salaryCalculator = [];

function onReady(){
    console.log('in onReady');
    $('#addSubmitButton').on('click', submit)
}//end on ready 



function submit() {
    console.log('in Submit');
    let newInfo={
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        ID: $('#idIn').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalaryIn').val()

       

  



    }//end New Info

//select input by ID
    
    
}//end submit function 
