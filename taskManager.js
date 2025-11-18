function showMenu(){
    console.log("Welcome to Task Manager!");
    console.log("                        ");
    console.log("1.List tasks");
    console.log("2.Add new task");
    console.log("3.Mark task as completed");
    console.log("4.Delete task");
    console.log("5.Exit");
}
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter Your Choice:\n", function(choice){
    const option = Number(choice);
    selectMenu(option);
    r1.close();
});
function selectMenu(choice){
    switch(choice) {
        case 1:
            listTask();
            break;
        case 2:
            addTask();
            break;
        case 3:
            completeTask();
            break;
        case 4:
            deleteTask();
            break;
        case 5:
            exitTask();
            break;
        default:
            console.log("Invalid choice! Please Enter a valid choice");
            showMenu()
            break;   
    }
}
function listTask(){ 
    console.log(" Clean the room\n Take medicine\n Complete assignment\n Watch a movie\n Learn a new cooking recipe");
}
function addTask(){ 
    console.log("Enter new task name:");
}
function completeTask(){
     console.log("Enter task number to mark complete:");
    }
function deleteTask(){ 
    console.log("Enter task number to delete:");
}
function exitTask(){ 
    console.log("Exiting tasks");
}