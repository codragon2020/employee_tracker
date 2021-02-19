USE employees_DB;

-- Department Seeds

INSERT INTO department (id, name)
VALUES (1, "Tech");

INSERT INTO department (id, name)
VALUES (2, "Brand");

INSERT INTO department (id, name)
VALUES (3, "HR");

INSERT INTO department (id, name)
VALUES (4, "Product");

-- Role Seeds

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Engineer", 120000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Sr Engineer", 140000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "IT Manager", 160000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Brand Manager", 95000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "HR Consultant", 85000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Manager", 110000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Product Analyst", 80000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Product Owner", 105000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Product Manager", 135000, 4);

-- Employees Seeds

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Louis", "Lawrence", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Isaac", "Havoc", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Bennie", "Raine", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Zach", "Skye", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Matthew", "Christy", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alec", "Mars", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Bert", "Rider", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Gerard", "Cotton", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Benjamin", "Jason", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Bryan", "Gates", 8, 10);

