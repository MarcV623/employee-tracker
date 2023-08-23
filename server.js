const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

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
];

(async () => {
    const database = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'company_db'
    })

    let answers = await inquirer.prompt(menu)
    console.log(answers)

    await database.end()
})();
