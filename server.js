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
let subanswers

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
                data = await database.query('SELECT * FROM employee')
                console.log(data[0])
                break;
            case 'Add Employee':
                // TODO: Retrieve valid roles...
                // TODO: Retrieve valid employees... + None/NULL option
                // TODO: Ask relevant questions...
                // TODO: Insert data into relevant table...
                break;
            case 'Update Employee Role':
                // TODO: Implement...
                break;
            case 'View All Roles':
                data = await database.query('SELECT * FROM role')
                console.log(data[0])
                break;
            case 'Add Role':
                data = await database.query('SELECT * FROM department')

                subanswers = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the name of the role?',
                        name: 'title'
                    },
                    {
                        type: 'input',
                        message: 'What is the salary of the role?',
                        name: 'salary'
                    },
                    {
                        type: 'list', 
                        message: 'Which department does the role belong to?',
                        name: 'department',
                        choices: data[0].map(department => department.name)
                    }
                ])

                await database.query(`INSERT INTO role (title, salary, department_id) VALUES ('${subanswers.title}', ${subanswers.salary}, ${data[0].find(department => department.name === subanswers.department).id})`)
                break;
            case 'View All Departments':
                data = await database.query('SELECT * FROM department')
                console.log(data[0])
                break;
            case 'Add Department':
                subanswers = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'what is the name of the department?',
                        name: 'department',  
                    }
                ])
                await database.query(`INSERT INTO department (name) VALUES ('${subanswers.department}')`)
                break;
        }

    } while (answers.command !== 'Quit')

    await database.end()
})();
