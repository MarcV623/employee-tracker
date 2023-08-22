INSERT INTO department (name) 
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 1),
        ('Salesperson', 80000, 2),
        ('Lead Engineer', 150000, 3),
        ('Software Engineer', 120000, 4),
        ('Accountant Lead', 160000, 5),
        ('Accountant', 125000, 6),
        ('Legal Team Lead', 250000, 7),
        ('Lawyer', 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('John', 'Doe', 'Sales Lead', 1),
        ('Mike', 'Chan', 'Salesperson', 2),
        ('Ashley', 'Rodriguez', 'Lead Engineer', 3),
        ('Kevin', 'Tupik', 'Software Engineer', 4),
        ('Malia', 'Brown', 'Accountant Lead', 5),
        ('Sarah', 'Lourd', 'Accountant', 6),
        ('Tom', 'Allen', 'Legal Team Lead', 7),
        ('Jason', 'Bourne', 'Lawyer', 8);
