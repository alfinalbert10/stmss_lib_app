# St. Mary’s Sunday School Library App (STMSS)

## Overview

The **St. Mary’s Sunday School Library App (STMSS)** is a web-based application developed to manage the library system for St. Mary’s Sunday School Athirampuzha.This is my mini project. The app provides admin-level functionality, including managing books, students, teachers, issuing and returning books, and viewing logs. The front-end of the application is developed in **React**.In this project I developed the front-end of the admin website and there is an app for the teachers which is developed in react native.

## Features

### Admin Functions
The admin can:
- **Books Management**:
  - View all books in the library.
  - Add new books to the library.
  - Edit details of existing books.
  - Delete books from the library.

- **Student Management**:
  - View all students.
  - Add new students to the system.
  - Edit student details.
  - Delete students.

- **Teacher Management**:
  - View all teachers.
  - Add new teachers to the system.
  - Edit teacher details.
  - Delete teachers.

- **Logs**:
  - View logs related to book transactions (issues, returns).

- **Book Transactions**:
  - Issue books to teachers.
  - Return books from teachers.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/stmss-library-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd stmss-library-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Tech Stack

- **React**: Front-end framework.
- **React Router**: For handling routes within the application.
- **Axios/Fetch API**: For making HTTP requests to the back-end.
- **CSS**: Styling the application.

## Usage

After starting the development server, you can access the admin dashboard where you will be able to perform the following actions:

- View, Add, Edit, and Delete books, students, and teachers.
- Issue and Return books to/from teachers.
- View logs for book transactions.

## Project Structure

```plaintext
reactfirst/
├── backend/          # Backend folder 
├── public/           # Public folder 
├── src/
│   ├── images/       # Contains image assets
│   ├── //rest of the files
