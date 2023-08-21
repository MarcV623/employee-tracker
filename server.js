const inquirer = require('inquirer')

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

