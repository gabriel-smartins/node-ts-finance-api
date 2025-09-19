# 🍪 CookieCash – Simple Transaction Manager

CookieCash is a minimalistic backend API for recording financial transactions.  
It identifies users via a **session cookie** (`session_id`) stored in the database, rather than traditional authentication.  
Great for learning backend architecture, sessions, and automated testing.

---

## 🚀 Tech Stack

- **Node.js**  
- **TypeScript**  
- **Fastify** – web framework  
- **Knex.js** – SQL query builder & migrations  
- **Vitest** – unit and integration tests  
- **SQLite** (or whatever database is configured via `knexfile`)  

---

## 🧩 Features / Functionalities

Based on `REQUIREMENTS.md`, implemented features include:

- Generation of `session_id` stored in cookie to identify user session  
- Record transactions (income / expense) tied to a user session  
- List all transactions for a given session  
- Get a particular transaction by ID  
- Compute or show balance for the session  
- Basic validations (e.g. required fields)  
- Automated tests covering core routes / use cases

## 🎯 Purpose

- This project was built to practice:
- Backend architecture with Node.js + TypeScript
- Session handling with cookies
- Database versioning with Knex migrations
- RESTful route design
- Automated testing with Vitest  

---

## 📦 Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/gabriel-smartins/node-ts-finance-api.git
   cd node-ts-finance-api

2. **Install Dependecies**
   ```bash
   npm install

3. **Configure environment**
  - Copy .env.example → .env
  - Copy .env.test.example → .env.test (for tests)

4. **Run migrations**
   ```bash
   npm run knex migrate:latest

5. **Start the server (development mode)**
   ```bash
   npm run dev

## 📘 API Endpoints
- Create Transaction
  ```bash
  POST /transactions
  Request body:
  {
    "title": "Salary",
    "amount": 5000,
    "type": "credit"
  }

- List All Transactions
  ```bash
   GET /transactions

- Get Transaction by ID
  ```bash
   GET /transactions/:id
  
- Get Summary (Balance)
  ```bash
    GET /transactions/summary

## 🧪 Running Tests
   ```bash
   npm run test



