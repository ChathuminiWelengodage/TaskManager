// Array to store all tasks,Each task has a name and a completed status.
let tasks = [
    { name: "Clean the room", completed: false },
    { name: "Complete the assignment", completed: false },
    { name: "Study", completed: false },
    { name: "Prepare lunch", completed: false }
];

console.log("\nWelcome to Task Manager!");

//Show menu list to the user
function showMenu(){
    
    console.log("                        ");
    console.log("1.List tasks");
    console.log("2.Add new task");
    console.log("3.Mark task as completed");
    console.log("4.Delete task");
    console.log("5.Exit");

    r1.question("Enter Your Choice:\n", function(choice){
    const option = Number(choice); //convert input to a number
    selectMenu(option);
    });

}
// Import readline module to handle user input via command line
const readline = require("readline");

// Create readline interface for input and output
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Handle user choice
function selectMenu(choice){
    switch(choice) {
        case 1:
            listTask();
            showMenu();
            break;
        case 2:
            addTask();
            break;
        case 3:
            completeTask();
            //showMenu();
            break;
        case 4:
            deleteTask();
            showMenu();
            break;
        case 5:
            exitTask();
            r1.close(); // Stop input
            break;
        default:
            console.log("Invalid choice! Please Enter a valid choice");
            showMenu();
            break;   
    }
}

//List all tasks
function listTask(){ 
    if(tasks.length === 0){
        console.log("No tasks available.");
        return;
    }

    console.log("\nYour Tasks:");

    // Loop through all tasks
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let status = task.completed ? "[X]" : "[ ]"; 

        console.log((i + 1) + ". " + status + " " + task.name);
    }
}

//Add a new task to the tasklist
function addTask(){ 
    r1.question("Enter new task name:", function(taskName){
    tasks.push({ name: taskName, completed: false });
        console.log("✅ Task added!\n");
        showMenu();
    });
}

//Mark the completed tasks
function completeTask(){
    if(tasks.length === 0) {
        console.log("No tasks available to mark complete.\n");
        showMenu();
        return;
    }
    r1.question("Enter task number to mark complete: ", function(number) {
        let taskNumber = Number(number);

        //Check validation whether entered number is inside array range
        if(taskNumber> 0 && taskNumber <= tasks.length){

            tasks[taskNumber - 1].completed = true;
        console.log("✅ Task " + taskNumber + " marked as complete!\n");

        } else {
            console.log("Invalid task number!\n");
        }
        showMenu();
    });
}

//Delete a task from tasklist
function deleteTask(){ 
    if (tasks.length === 0) {
        console.log("No tasks available to delete.\n");
        showMenu();
        return;
    }
    r1.question("Enter task number to delete: ", function(number) {
        let taskNumber = Number(number);

        if(taskNumber > 0 && taskNumber <= tasks.length){
            let removedTask = tasks.splice(taskNumber - 1, 1);
            console.log( "❌ Task " + taskNumber + " deleted!\n");
        } else {
            console.log("Invalid task number!\n");
        }
        showMenu();
    });
}
    
// Exit from the programm
function exitTask(){ 
    console.log("👋 Exiting program. Goodbye!");
}

showMenu();
