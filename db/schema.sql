CREATE DATABASE money_app;

CREATE TABLE entry (
    id SERIAL PRIMARY KEY,
    amount NUMERIC NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    month TEXT NOT NULL,
    year TEXT NOT NULL
);

insert into entry (amount, type, category, month, year) values (1500, 'revenue', 'sales', 'Jan', '2023');
insert into entry (amount, type, category, month, year) values (1300, 'revenue', 'sales', 'Feb', '2023');
insert into entry (amount, type, category, month, year) values (1700, 'revenue', 'sales', 'Mar', '2023');
insert into entry (amount, type, category, month, year) values (1100, 'revenue', 'sales', 'Apr', '2023');
insert into entry (amount, type, category, month, year) values (100, 'revenue', 'sales', 'May', '2023');

insert into entry (amount, type, category, month, year) values (250, 'expense', 'PPE', 'Jan', '2023');
insert into entry (amount, type, category, month, year) values (250, 'expense', 'PPE', 'Feb', '2023');
insert into entry (amount, type, category, month, year) values (250, 'expense', 'PPE', 'Mar', '2023');
insert into entry (amount, type, category, month, year) values (250, 'expense', 'PPE', 'Apr', '2023');
insert into entry (amount, type, category, month, year) values (250, 'expense', 'PPE', 'May', '2023');

insert into entry (amount, type, category, month, year) values (720, 'revenue', 'rent', 'Jan', '2023');
insert into entry (amount, type, category, month, year) values (720, 'revenue', 'rent', 'Feb', '2023');
insert into entry (amount, type, category, month, year) values (720, 'revenue', 'rent', 'Mar', '2023');
insert into entry (amount, type, category, month, year) values (720, 'revenue', 'rent', 'Apr', '2023');
insert into entry (amount, type, category, month, year) values (720, 'revenue', 'rent', 'May', '2023');

insert into entry (amount, type, category, month, year) values (125, 'expense', 'utilities', 'Jan', '2023');
insert into entry (amount, type, category, month, year) values (125, 'expense', 'utilities', 'Feb', '2023');
insert into entry (amount, type, category, month, year) values (125, 'expense', 'utilities', 'Mar', '2023');
insert into entry (amount, type, category, month, year) values (125, 'expense', 'utilities', 'Apr', '2023');
insert into entry (amount, type, category, month, year) values (125, 'expense', 'utilities', 'May', '2023');