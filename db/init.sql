-- Create the test database and grant privileges to expense_user
CREATE DATABASE IF NOT EXISTS expense_system_test;
GRANT ALL PRIVILEGES ON expense_system_test.* TO 'expense_user'@'%';
FLUSH PRIVILEGES;