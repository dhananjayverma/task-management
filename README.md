# Task Management System API

A backend API for managing tasks with secure authentication, user role management, and comprehensive CRUD operations. This API is built using Node.js, Express, MongoDB, and JWT for authentication.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Configuration](#configuration)
- [Testing with Postman](#testing-with-postman)

## Features

- **User Registration and Authentication**: Secure user registration and login with JWT-based authentication and role-based access control (admin, user).
- **Task Management**: CRUD operations for tasks with permissions based on user roles.
- **Task Filtering**: Retrieve and filter tasks based on priority, status, and assigned user.
- **Role-Based Access Control**: Route guards and middleware for managing user roles and permissions.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Validation**: express-validator

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Postman or any other API client

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
# API Endpoints

## Authentication

### Register User
- **Endpoint:** `POST /api/auth/register`
- **Body (JSON):**

  ```json
  {
    "username": "string",
    "password": "string"
  }
- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request`

### Login User
- **Endpoint:** `POST /api/auth/login`
- **Body (JSON):**
  
  ```json
  {
    "username": "string",
    "password": "string"
  }
- **Success Response:** ` 200 OK (with JWT token)`
- **Error Response:** ` 200 OK (with JWT token)`

### Create Task
- **Endpoint:** `POST /api/tasks`
- **Headers:** `Authorization: Bearer <token>`
- **Body (JSON):**
  
  ```json
  {
    "title": "string",
    "description": "string",
    "priority": "string",
    "status": "string",
    "assignedTo": "user_id"
  }
- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request`

### Get Tasks
- **Endpoint:** `GET /api/tasks`
- **Headers:** `Authorization: Bearer <token>`
- **Success Response:** `200 OK`
- **Error Response:** `401 Unauthorized`

### Update Task
- **Endpoint:** `PUT /api/tasks/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Body (JSON):**
  
  ```json
  {
    "title": "string",
    "description": "string",
    "priority": "string",
    "status": "string"
  }
- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request or 404 Not Found`

### Delete Task
- **Endpoint:** `DELETE /api/tasks/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Success Response:** `204 No Content`
- **Error Response:** `401 Unauthorized` or `404 Not Found`


### Get All Users
- **Endpoint:** `GET /api/users`
- **Headers:** `Authorization: Bearer <token>` (admin only)
- **Success Response:** `200 OK`
- **Error Response:** `401 Unauthorized`


### Get User by ID
- **Endpoint:** `GET /api/users/:id`
- **Headers:** `Authorization: Bearer <token>` (admin only)
- **Success Response:** `200 OK`
- **Error Response:** `401 Unauthorized` or `404 Not Found`

### Update User
- **Endpoint:** `PUT /api/users/:id`
- **Headers:** `Authorization: Bearer <token>` (admin only)
- **Body (JSON):**

  ```json
  {
    "username": "string"
    "role": "string"
  }

- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request or 404 Not Found`

### Delete User
- **Endpoint:** `DELETE /api/users/:id`
- **Headers:** `Authorization: Bearer <token>` (admin only)
- **Success Response:** `204 No Content`
- **Error Response:** `404 Not Found`

## Database Models

### User Fields
- **Fields:** `username`, `password`, `role`
- **Role Options:** `admin`, `user`

### Task Fields
- **Fields:** `title`, `description`, `priority`, `status`, `assignedTo`
- **Priority Options:** `low`, `medium`, `high`
- **Status Options:** `pending`, `in-progress`, `completed`

## Configuration
- **Database:** Update `DB_URI` in the `.env` file to point to your MongoDB instance.
- **JWT Secret:** Set `JWT_SECRET` in the `.env` file for token encryption.

## Running the Application

- **Start the Server:** `npm run dev` (using nodemon)



