console.log("Welcome to Task Manager!");
console.log("                        ");
console.log("1.List tasks");
console.log("2.Add new task");
console.log("3.Mark task as completed");
console.log("4.Delete task");
console.log("5.Exit");

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter Your Choice:", function(choice){
    console.log(choice);
    r1.close();
})