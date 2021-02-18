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
    // startApp();
});