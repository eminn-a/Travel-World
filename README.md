# Travel-World

Welcome to the Travel-World project! This repository contains the source code and documentation for a web-based travel agency platform.

## Live Demo

Check out the live demo of the Travel-World [here](https://travel-world-c12.web.app/).

## About

The Travel Agency Website is a comprehensive platform that allows users to browse, book, and manage travel packages. It offers a user-friendly interface for both travelers and administrators.

## Features

- **User Registration and Authentication**: Secure user signup and login functionalities.
- **Booking System**: Users can book travel packages and receive confirmation.
- **Blog System**: Users can view blog posts related to travel packages and updates.
- **Admin Panel**: Admins can manage travel packages, bookings, and blog information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies

### Frontend

- **Framework**: React.js
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **State Management**: React Query
- **Notifications**: React Hot Toast
- **Validation**: Yup
- **Form Resolvers**: Hookform Resolvers

### Backend

- **Server**: Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt, bcryptjs
- **Environment Variables**: dotenv
- **CORS**: cors

### Hosting

- **Frontend**: Firebase
- **Backend**: Render

### Dependencies

#### Frontend

- `@hookform/resolvers`: ^3.4.2
- `@tanstack/react-query`: ^5.45.0
- `@tanstack/react-query-devtools`: ^5.45.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-hook-form`: ^7.51.5
- `react-hot-toast`: ^2.4.1
- `react-router-dom`: ^6.23.1
- `yup`: ^1.4.0

#### Backend

- `bcrypt`: ^5.1.1
- `bcryptjs`: ^2.4.3
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `jsonwebtoken`: ^9.0.2
- `mongodb`: ^6.8.0
- `mongoose`: ^8.4.4

## Installation

To run this project locally, follow these steps:

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/travel-agency-website.git
   ```
2. Navigate to the project directory

   ```bash
   cd travel-agency-website

   ```

Frontend Setup

3. Navigate to the 'client' directory
   ```bash
   cd frontend
   ```
4. Install the dependencies
   ```bash
   npm install
   ```
5. Install the dependencies
   ```bash
   npm install
   ```
6. Start the development server
   ```bash
   npm run dev
   ```

Backend Setup

7. Open a new terminal and navigate to the 'server' directory
   ```bash
   cd server
   ```
8. Install the dependencies
   ```bash
   npm install
   ```
9. Create a .env file in the backend directory and add your environment variables (example below)
   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
10. Start the backend server
    ```bash
     npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Use the interface to browse travel packages, register an account, and make bookings.
3. Check out the blog posts to stay updated on travel-related information.
4. Admins can access the admin panel to manage travel packages, bookings, and blog posts.
