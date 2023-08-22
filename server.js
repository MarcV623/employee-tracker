const inquirer = require('inquirer')
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'company_db'
},
console.log(`Connected to the company_db database.`)
);

const menu = [
    {
        type: 'list', 
        message: 'What would you like to do?',
        name: 'command',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }
]

inquirer.prompt(menu).then((answers) => {
    console.log(answers)
})

