
# Task Manager – Command Line Application

A simple and interactive **Task Manager** built using **Node.js**.  
This console-based application allows users to manage their daily tasks by listing, adding, completing, and deleting tasks directly from the terminal.

---

##  Description of the Application

This Task Manager application helps users keep track of their to-do items through a simple, menu-driven command-line interface.

### Implemented Functionalities

###  Core Features
- **List Tasks:** View all tasks along with their completion status (`[ ]` for incomplete, `[X]` for completed).  
- **Add New Task:** Add a new task to the list.  
- **Mark Task as Completed:** Mark any task as complete by entering its number.  
- **Delete Task:** Remove tasks from the list by entering the task number.  
- **Exit:** Close the application safely.  
### Install Dependencies
This project does **not require any external dependencies**.  
Only built-in **Node.js `readline` module** is used.

So no need to run `npm install`.
## How to Run the Application
### Requirements
- **Node.js** (v24 recommended)
- No additional dependencies are required.

### Steps
1. **Clone the Repository**
```
git clone <repository-link>
```
2. **Navigate to the Project Folder**
```
cd <folder-name>
```
3. **Run the Application**
```
node taskManager.js
```
---
### Example
```
Welcome to Task Manager!

1. List tasks
2. Add new task
3. Mark task as completed
4. Delete task
5. Exit
```
- Input `1` to view tasks.
- Input `2` to add a new task.
- Input `3` and enter the task number to mark it complete.
- Input `4` and enter the task number to delete a task.
- Input `5` to exit the program.
### Limitations
- Tasks are stored in memory only (not saved after exit).
- No database or file-based storage integration.
- Task list resets every time the program restarts.
- Input must be numeric when selecting task numbers.
- Designed for basic, simple console task management.




