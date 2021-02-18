// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// Connection Properties
const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_DB"
}

// Creating Connection
const connection = mysql.createConnection(connectionProperties);

// Establishing Connection to database
connection.connect((err) => {
    if (err) throw err;

    // Start app function
    console.log("\n Welcome to Employee Tracker! \n");
    startApp();
});

// Start App function
function startApp(){

    // Prompt user to choose an option
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all employees",
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete role",
        "Delete department",
        "View department budgets"
      ]
    })
    .then(() => {
        connection.end();
    })
}