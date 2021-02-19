// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const promisemysql = require("promise-mysql");
const dotenv = require('dotenv');

// Call dotenv configuration
dotenv.config();

// Connection Properties
const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
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
        "View all employees by department",
        "View all employees by role",
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
    .then((answer) => {

        // Switch case depending on user option
        switch (answer.action) {
            
            case "View all employees":
                viewAllEmp();
                break;

            case "View all employees by department":
                viewAllEmpByDept();
                break;

            case "View all employees by role":
                viewAllEmpByRole();
                break;

            // case "View all employees by manager":
            //     viewAllEmpByMngr();
            //     break;

            // case "Add employee":
            //     addEmp();
            //     break;

            // case "Add department":
            //     addDept();
            //     break;

            // case "Add role":
            //     addRole();
            //     break;

            // case "Update employee role":
            //     updateEmpRole();
            //     break;

            // case "Update employee manager":
            //     updateEmpMngr();
            //     break;

            // case "Delete employee":
            //     deleteEmp();
            //     break;

            // case "View department budgets":
            //     viewDeptBudget();
            //     break;

            // case "Delete role":
            //     deleteRole();
            //     break;

            // case "Delete department":
            //     deleteDept();
            //     break;
        }
    });
}

// View all employees 
function viewAllEmp(){

    // Query to view all employees
    let query = "SELECT e.id AS ID, e.first_name AS 'First Name', e.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, concat(m.first_name, ' ' ,  m.last_name) AS Manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";

    // Query from connection
    connection.query(query, function(err, res) {
        if(err) return err;
        console.log("\n");

        // Display query results using console.table
        console.table(res);

        //Back to main menu
        startApp();
    });
}

// view all employees by role
function viewAllEmpByRole(){

    // set global array to store all roles
    let roleArr = [];

    // Create connection using promise-sql
    promisemysql.createConnection(connectionProperties)
    .then((conn) => {

        // Query all roles
        return conn.query('SELECT title FROM role');
    }).then(function(roles){

        // Place all roles within the roleArry
        for (i=0; i < roles.length; i++){
            roleArr.push(roles[i].title);
        }
    }).then(() => {

        // Prompt user to select a role
        inquirer.prompt({
            name: "role",
            type: "list",
            message: "Which role would you like to search?",
            choices: roleArr
        })    
        .then((answer) => {

            // Query all employees by role selected by user
            const query = `SELECT e.id AS ID, e.first_name AS 'First Name', e.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, concat(m.first_name, ' ' ,  m.last_name) AS Manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE role.title = '${answer.role}' ORDER BY ID ASC`;
            connection.query(query, (err, res) => {
                if(err) return err;

                // show results using console.table
                console.log("\n");
                console.table(res);
                startApp();
            });
        });
    });
}

// View all employees by department
function viewAllEmpByDept(){

    // Set global array to store department names
    let deptArr = [];

    // Create new connection using promise-sql
    promisemysql.createConnection(connectionProperties
    ).then((conn) => {

        // Query just names of departments
        return conn.query('SELECT name FROM department');

    }).then(function(value){

        // Place all names within deptArr
        for (i = 0; i < value.length; i++){
            deptArr.push(value[i].name);
        }
    }).then(() => {

        // Prompt user to select department from array of departments
        inquirer.prompt({
            name: "department",
            type: "list",
            message: "Which department would you like to search?",
            choices: deptArr
        })    
        .then((answer) => {

            // Query all employees depending on selected department
            const query = `SELECT e.id AS ID, e.first_name AS 'First Name', e.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, concat(m.first_name, ' ' ,  m.last_name) AS Manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.name = '${answer.department}' ORDER BY ID ASC`;
            connection.query(query, (err, res) => {
                if(err) return err;
                
                // Show results in console.table
                console.log("\n");
                console.table(res);

                // Back to main menu
                startApp();
            });
        });
    });
}