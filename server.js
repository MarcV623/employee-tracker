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
let data

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
                data = await database.query('SELECT * FROM role')
                console.log(data[0])
                break;
            case 'Add Role':
                // TODO: Implement...
                break;
            case 'View All Departments':
                data = await database.query('SELECT * FROM department')
                console.log(data[0])
                break;
            case 'Add Department':
                // TODO: Implement...
                break;
        }

    } while (answers.command !== 'Quit')

    await database.end()
})();
