Online Library System (React, Redux, Tailwind CSS)

GitHub: [https://github.com/coder6919/online-library-system]

This project is the solution for the React Assignment 2, fulfilling all requirements including routing, state management using Redux Toolkit, and UI styling with Tailwind CSS.

Requirements Met:

Setup: Created using Vite (as required).

Routing: Implements react-router-dom for Home (/), Browse (/books/:category), Details (/books/details/:id), and Add Book (/add).

State Management: Uses Redux Toolkit to manage the global book list state.

Pages: All required pages (Home, Browse, Details, Add Book) and the 404 page are implemented.

Functionality: Includes search functionality, category filtering, form validation, and correct post-submission redirection.

Styling: Uses Tailwind CSS for a minimalist light red and white theme.

🚀 How to Run Locally

Follow these steps to set up and run the application on your local machine:

1. Project Initialization

Assuming you have npm and node installed, run the following commands in your terminal:

# Create the project directory (or use the files directly)
mkdir online-library-system
cd online-library-system

# Install dependencies
npm install

# Install Tailwind CSS and its peer dependencies
npm install tailwindcss @tailwindcss/vite

2. Configure Tailwind CSS

i. Add the @tailwindcss/vite plugin to your Vite configuration.
ii. Add an @import to your CSS file that imports Tailwind CSS

Ensure your src/index.css contains the Tailwind directives as provided in the project files.

3. Start the Application

npm run dev


The application will now be running on http://localhost:5173 (or similar port).