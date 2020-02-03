console.log('test test test ');

$(document).ready(onReady);

let employeeInfo = [];

function onReady(){
    console.log('in onReady');
    $('#addSubmitButton').on('click', submit)
    $(document).on("click",'.addDelete', removeEmployee);
}//end on ready 

function submit() {
    console.log('in Submit');

    //select inputs by ID
    //use their data in a new Info object 

    let newInfo={
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }

        $('#firstIn').val('');
        $('#lastIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#annualSalaryIn').val('');

    //end New Info
    //push new info object into employeeInfo arrray 

    employeeInfo.push(newInfo);

    displayEmployees();
    ///ask Robert About This
    addSalaries();

//select input by ID
    
    
}//end submit function 

function displayEmployees(){
    console.log('in Display ');
    //target an output element by ID
    let el= $('#employeesOut')
    //empty out element
    el.empty();
    //loop through employeeInfo Array
    for(let i=0; i<employeeInfo.length; i++){
        el.append(`
        <tr id="row-${i}">
        <td>${employeeInfo[i].firstName}</td>
        <td>${employeeInfo[i].lastName}</td>
        <td>${employeeInfo[i].id}</td>
        <td>${employeeInfo[i].title}</td>
        <td>${employeeInfo[i].annualSalary}</td>
        <td><button class="addDelete row-${i}">Delete</button></td>
        </tr>
        `);
       
    


        
    }//end displayEmployees
    
    }//end displayInfo



//end display Employees 



function addSalaries(){

    let totalSalary = 0;

    let el = $('#totalMonthly')

    el.append(displayEmployees)

    //go through employee list
    for(let employee of employeeInfo){
    totalSalary += Number(employee.annualSalary)
    
    
    }

    el.empty();

    el.append(`
    <h3>Total Monthly: $${totalSalary}</h3>
    `)

    if(totalSalary > 20000){
    el.addClass('addRed')

    }///end if 

    
    

    console.log('test', totalSalary);
    
    
    return totalSalary;



 } // end addSalaries


function removeEmployee(){
                           let rowDelete = this.classList[1];
                           let el = $(`#${rowDelete}`);
                           let employeeToDelete = rowDelete.split("-")[1];
                           console.log(employeeToDelete);
                           el.remove();

                           /**
                            * The reason its not working is because employeeInfo isn't being updated when you
                            * delete a row, so you should remove the employee at the index of the row you deleted from the employeeInfo
                            * array then do addSalaries again
                            * HINT: array.splice(index, 1);
                            * what is array and what is index?
                            */
                           console.log(el);

                           console.log(rowDelete);
                         }// end removeEmployee

  
        
    
