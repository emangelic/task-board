// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // check for exisitance of nextId KEY
    if(nextId == null) {
        // no id KEY exists --> lets initalize (Key and VALUE)
        nextId = 1;
    } else {
        // already exists --> update the value
        // nextId = nextId + 1;
        nextId++;
    }
    localStorage.setItem('nextId', JSON.stringify(nextId));
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    console.log("Running Handle ADD LOGIC")
    // What STEPS do we walk through to CAPTURE and SAVE DATA(?)
    // handle event listener  --> this prevents the default BROSWER ACTION of refreshing
    event.preventDefault();

    // capture the user data (form inputs)
    let title = $('#title').val();
    let due_date = $('#due_date').val();
    let desc = $('#desc').val()

    console.log(title, due_date, desc);

    // We want to CREATE a NEW OBJECT 
    let newId = generateTaskId()
     
    let temp = {
        id: newId,
        title: title,
        due_date: due_date,
        desc: desc,
        status: 'To-Do'
    }

    console.log("New Obj: ", temp)
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
// --> Vanilla JS equivilent document.getElementById()
$(document).ready(function () {
    // we wait for the whole page to finish loading before running logic

    // we want to wait for the MODEL submit event --> capture the user data (input fields)
   // $('#modal-form').on('submit', handleAddTask);
    $('#save').on('click', handleAddTask);
});

