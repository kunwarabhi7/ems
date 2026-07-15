# Employee Management System (EMS)

A Full Stack Employee Management System built using **Next.js**, **Node.js**, **Express.js**, **MySQL**, and **Sequelize**.

---

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- Shadcn UI
- Axios

### Backend

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- bcrypt

---

## Features

- User Authentication
- JWT Authorization
- Employee CRUD
- Department CRUD
- Dashboard
- Protected Routes
- Responsive UI

---

## Project Structure

```
Employee_Management_System

client/
server/
```

---

## Backend Installation

```bash
cd server

npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=ems
DB_USER=root
DB_PASSWORD=password

JWT_SECRET=secret
JWT_EXPIRES_IN=1d
```

Run

```bash
npm run dev
```

---

## Frontend Installation

```bash
cd client

npm install
```

Create

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

Run

```bash
npm run dev
```

---

## API Endpoints

### Auth

```
POST /api/v1/auth/register

POST /api/v1/auth/login
```

---

### Employees

```
GET /api/v1/employees

GET /api/v1/employees/:id

POST /api/v1/employees

PUT /api/v1/employees/:id

DELETE /api/v1/employees/:id
```

---

### Departments

```
GET /api/v1/departments

POST /api/v1/departments

PUT /api/v1/departments/:id

DELETE /api/v1/departments/:id
```

---

## Future Improvements

- Role Based Authentication
- Pagination
- Search
- Sorting
- File Upload
- Docker
- Jenkins
- AWS Deployment
- Kubernetes

---

## Author

Abhishek

GitHub

Portfolio
