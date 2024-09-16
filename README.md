# Todo App API

## Description
A simple Todo app API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete todos, as well as manage users and categories.

## API Endpoints:

### Users
- **GET /api/users**: Get all users
- **POST /api/users**: Create a new user
- **PATCH /api/users/:id**: Update a user
- **DELETE /api/users/:id**: Delete a user

### Todos
- **GET /api/todos**: Get all todos
- **POST /api/todos**: Create a new todo
- **PATCH /api/todos/:id**: Update a todo
- **DELETE /api/todos/:id**: Delete a todo

### Categories
- **GET /api/categories**: Get all categories
- **POST /api/categories**: Create a new category

# Todo App API
## Description

This is a simple Todo List API built with Node.js, Express, and MongoDB. The application allows users to create, read, update, and delete todo items. Each todo is associated with a user, and todos can be categorized by category names.

The application uses three collections:

- Users – Stores user information.
- Todos – Stores todo items with references to users.
- Categories – A string-based category field to categorize todo items.

## Features

- CRUD operations for users, todos, and categories (as strings).
- Data validation using Mongoose (e.g., required fields, string types, enums).
- MongoDB indexing for optimized queries (e.g., on userId).
- Sensible data modeling using MongoDB and Mongoose.

## API Endpoints

### Users

**GET /api/users**: Get all users.

#### Sample Request:
```bash
curl -X GET http://localhost:5000/api/users
```
#### Response:

```json

    [
      {
        "_id": "66e756cbe9583efd6a4d38e2",
        "username": "john_doe",
        "email": "john@example.com",
        "password": "hashed_password",
        "createdAt": "2023-09-16T10:45:00.000Z",
        "updatedAt": "2023-09-16T10:45:00.000Z"
      }
    ]
```

**POST /api/users**: Create a new user.
#### Sample Request:
```  bash

    curl -X POST http://localhost:5000/api/users \
    -H "Content-Type: application/json" \
    -d '{
        "username": "john_doe",
        "email": "john@example.com",
        "password": "securePassword123"
    }'
```
**PATCH /api/users/:id**: Update a user.
#### Sample Request:
``` bash

    curl -X PATCH http://localhost:5000/api/users/{userId} \
    -H "Content-Type: application/json" \
    -d '{
        "username": "john_updated",
        "email": "john_updated@example.com"
    }'
```

**DELETE /api/users/:id**: Delete a user.
#### Sample Request:
``` bash

        curl -X DELETE http://localhost:5000/api/users/{userId}
```

## Todos

**GET /api/todos**: Get all todos.
#### Sample Request:
```bash

    curl -X GET http://localhost:5000/api/todos
```

**GET /api/todos/user/:userId**: Get all todos for a specific user.
#### Sample Request:
```bash
    curl -X GET http://localhost:5000/api/todos/user/66e756cbe9583efd6a4d38e2
```

**POST /api/todos**: Create a new todo.
#### Sample Request:
```bash

    curl -X POST http://localhost:5000/api/todos \
    -H "Content-Type: app*lication/json" \
    -d '{
        "title": "Buy groceries",
        "description": "Need to buy milk and eggs",
        "status": "pending",
        "userId": "66e756cbe9583efd6a4d38e2",  // Replace with valid user ID
        "category": "Shopping"
    }'
```

**PATCH /api/todos/:id**: Update a todo.
#### Sample Request:
```bash

    curl -X PATCH http://localhost:5000/api/todos/{todoId} \
    -H "Content-Type: application/json" \
    -d '{
        "status": "completed"
    }'
```

**DELETE /api/todos/:id**: Delete a todo.
#### Sample Request:
``` bash

        curl -X DELETE http://localhost:5000/api/todos/{todoId}
```

### Data Validation and Indexing

#### Data Validation:

The Todo model enforces the following validation rules:
  - title: Required and must be a string.
  - status: Restricted to pending or completed.
  - userId: Must be a valid ObjectId referencing a User.
  - category: Stored as a string (optional).

The User model also enforces:
 - username, email, password: Required.

##### Indexing:
 - Indexing is applied on userId in the Todo collection to optimize queries for retrieving todos based on the user.

