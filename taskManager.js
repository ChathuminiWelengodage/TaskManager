let tasks = [
    { name: "Clean the room", completed: false },
    { name: "Complete the assignment", completed: false },
    { name: "Study", completed: false },
    { name: "Prepare lunch", completed: false }
];

console.log("Welcome to Task Manager!");
function showMenu(){
    
    console.log("                        ");
    console.log("1.List tasks");
    console.log("2.Add new task");
    console.log("3.Mark task as completed");
    console.log("4.Delete task");
    console.log("5.Exit");

    r1.question("Enter Your Choice:\n", function(choice){
    const option = Number(choice);
    selectMenu(option);
    //r1.close();
    });

}
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
            showMenu();
            break;
        case 4:
            deleteTask();
            showMenu();
            break;
        case 5:
            exitTask();
            r1.close();
            break;
        default:
            console.log("Invalid choice! Please Enter a valid choice");
            showMenu();
            break;   
    }
}
function listTask(){ 
    if(tasks.length === 0){
        console.log("No tasks available.");
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let status = task.completed ? "[✔]" : "[ ]";

        console.log((i + 1) + ". " + status + " " + task.name);
    }
}
    
function addTask(){ 
    r1.question("Enter new task name:", function(taskName){
    tasks.push({ name: taskName, completed: false });
        console.log("✅ Task added!\n");
        showMenu();
    });
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

showMenu();
