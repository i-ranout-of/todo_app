📝 TODO API (Node.js + Express + MongoDB)

A lightweight and modular REST API for managing Todo tasks — built with Node.js, Express, and MongoDB Atlas.
Includes full CRUD operations and a versioned route structure for easy scalability (e.g., /api/v1/, /api/v2/).

🚀 Features

✅ Create, Read, Update, Delete (CRUD) Todos

✅ MongoDB Atlas integration

✅ Environment-based configuration (dotenv)

✅ Versioned route structure (/api/v1/...)

✅ Modular controllers and routes

✅ Future-ready for TypeScript conversion

📁 Folder Structure
project/
├── controllers/
│   └── todoController.js      # Business logic (CRUD)
├── database/
│   └── index.js               # MongoDB connection
├── models/
│   └── Todo.js                # Mongoose schema/model
├── routes/
│   ├── index.js               # API version loader
│   └── v1/
│       └── todoRoutes.js      # v1 todo endpoints
├── .env                       # Environment variables (ignored)
├── .gitignore
├── index.js                   # Application entry point
└── README.md

⚙️ Tech Stack

Runtime: Node.js (v18+)

Framework: Express.js

Database: MongoDB Atlas

ODM: Mongoose

Environment Handling: dotenv

API Testing: Postman

🔧 Installation & Setup
1️⃣ Clone the repository
git clone <repository-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Create .env file in the project root
PORT=5000
MONGODB_URI="your-mongodb-connection-string"


Example MongoDB URI:

mongodb+srv://<username>:<password>@<cluster>.mongodb.net/todo?retryWrites=true&w=majority

4️⃣ Start the development server
npm start


Server runs at:

http://localhost:5000

📬 API Documentation (Postman)

Base URL

{{localhost}} = http://localhost:5000

▶️ 1. Create Todo

POST /api/v1/todos

Request Body

{
  "title": "Cats",
  "description": "Bring them back after the chase is done",
  "completed": false
}


Response

{
  "_id": "6900a00273019b4bd2c023ff",
  "title": "Cats",
  "description": "Bring them back after the chase is done",
  "completed": false,
  "createdAt": "2025-10-28T10:50:42.420Z",
  "updatedAt": "2025-10-28T10:50:42.420Z",
  "__v": 0
}

▶️ 2. Get All Todos

GET /api/v1/todos

▶️ 3. Get Todo by ID (query param style)

GET /api/v1/todos?id=<todo_id>

▶️ 4. Update Todo

PATCH /api/v1/todos/:id

Request Body

{
  "completed": true
}

▶️ 5. Delete Todo

DELETE /api/v1/todos/:id


🧱 Future Enhancements

Add query filtering (?completed=true)

Pagination support

JWT authentication & authorization

Request validation (Joi / Zod)

Swagger/OpenAPI documentation

Migration to TypeScript

CI/CD integration