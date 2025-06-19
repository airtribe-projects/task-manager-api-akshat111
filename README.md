# Task Manager API

A simple Task Manager API built with **Node.js** and **Express.js**. It supports basic CRUD operations on tasks and includes validation and filtering capabilities.

## 🚀 Features

- Get all tasks or filter by `completed` status
- Get a task by ID
- Create new tasks with validation
- Update task fields (title, description, completed)
- Delete tasks by ID
- In-memory data handling

## 📦 Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/akshat111/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   node server.js
   ```

4. **Run tests**:

   ```bash
   npm test
   ```

## 📚 API Endpoints

### GET /tasks

- Returns all tasks.
- Optional query: `?completed=true` or `?completed=false`

### GET /tasks/:id

- Returns task with specific `id`.
- Returns 404 if not found.

### POST /tasks

- Creates a new task.
- Required fields: `title`, `description`
- Optional: `completed` (boolean)

```json
{
  "title": "New Task",
  "description": "Details about the task",
  "completed": false
}
```

### PUT /tasks/:id

- Updates an existing task by ID.
- At least one field is required to update.

```json
{
  "title": "Updated Task",
  "completed": true
}
```

### DELETE /tasks/:id

- Deletes a task by ID.
- Returns 200 on success, 404 if not found.

## 🧪 Testing

The test cases for this project were provided by the mentors at AirTribe as part of the learning program. I did not write the tests myself — I only ensured that the application passes all the provided test cases.

```bash
npm run test
```

## 🧑 Author

Made with ❤️ by Akshat-Kumar

## 📄 License

This project is licensed under the MIT License.