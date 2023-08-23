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

let answers

(async () => {
    const database = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'company_db'
    })

    do {
        answers = await inquirer.prompt(menu)
        
        switch (answers.command) {
            case 'View All Employees':
                // TODO: Implement...
                break;
            case 'Add Employee':
                // TODO: Implement...
                break;
            case 'Update Employee Role':
                // TODO: Implement...
                break;
            case 'View All Roles':
                // TODO: Implement...
                break;
            case 'Add Role':
                // TODO: Implement...
                break;
            case 'View All Departments':
                // TODO: Implement...
                break;
            case 'Add Department':
                // TODO: Implement...
                break;
        }

    } while (answers.command !== 'Quit')

    await database.end()
})();
