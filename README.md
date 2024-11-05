# Permalist-Project

->Permalist Task List App
A task management application built with Express.js and PostgreSQL, allowing users to create, edit, delete, and mark tasks as complete.

->Features:
Task Creation: Add new tasks to your list.
Task Editing: Update task titles as needed.
Task Deletion: Remove tasks from your list.
Mark Complete: Toggle tasks as complete or incomplete.

->Prerequisites:
Make sure you have the following installed:

Node.js and npm
PostgreSQL

->Installation
Clone the repository:

bash
git clone https://github.com/jbolan12/Permalist-Project
cd 'repository_directory'

->Install dependencies:

bash
npm install

->Set up your PostgreSQL database:

Create a new database named permalist.
Create an items table with the following schema:
sql
Copiar código
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE
);

->Update the database credentials in the code if necessary:

javascript
Copiar código
const db = new pg.Client({
  user: "your_username",
  host: "localhost",
  database: "permalist",
  password: "your_password",
  port: 5432,
});

->Usage
Start the server:

bash
npm start
Open http://localhost:3000 in your browser to view and manage your task list.

Routes
GET /: Fetches and displays the list of tasks.
POST /add: Adds a new task to the list.
POST /edit: Edits the title of an existing task.
POST /delete: Deletes a task from the list.
POST /mark-complete: Toggles the completion status of a task.

->Deployment
To deploy the app, consider using a platform like Railway or Render, which support Node.js and PostgreSQL applications and make environment variable management simple.

->Contributing
If you’d like to contribute to this project, feel free to fork the repository and submit pull requests.
