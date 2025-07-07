# StackChat - A Chatting Web Application

- Created 2 folders - frontend, backend

## Frontend
- create vite app
- configured port **3000**
- installed the depedencies like tailwindcss, daisyui, react-router, tanStackQuery, react-hot-toast like
- configured daisyui plugin in the tailwind css plugin file and also set the themes and imported the taiwindcss in index.css

### Main.jsx
- imported the the Browser-router and set and also tanStackquery client

### App.jsx
- created routes for routing through the different pages



## Backend
- created initial package.json **npm init**
- downloaded all dependencies and dev dependencies
- created **server.js** and in package.json configured **dev** command to run the given backend with **npm run dev** command
- created **routes/auth.route.js** to work with routes
- created **controllers/auth.controller.js** to control the routes functions
- created **lib/db.js** to connect the application "MongoDb Atlas"
    - In 'MongoDb Atlas', created new project
    - created a new cluster
    - provided network access to all ip addresses

### Auth Route
- created and exported user model in **models/User.js** using mongoose package
- used **bcryptjs** package for **hashing of password** before it gone to created as a usermodel, we added as a prehook in userSchema
- created signup method for validation at a specific **/api/auth/signup** route when user tries to signup
    - after validation we create a user with email, password and fullName credentials and store to the database and return user object as a response
    - created a jwt - json web tokens for a signup session and storing it in a cooking
    - also creating random avtar as a default profile pic
- created login method for **/api/auth/login** route to check based on given email and password that user exists or not and matching the password with hashed password and if user exists than sending the user object
    - creating a token ans storing it in a cookie
- created logout method to delete the token from the cookie and user logout from the application
- created a protectedRoute middleware for which i am checking the token in the cookie and if token is valid than only allow to access the route otherwise return
- created onboarding method for **/api/auth/onboarding** route where user can update their profile like fullName, bio and profilepic and location and giving onBoarding to true
    - Also upserting the stream user

### User Route
- created user route for **/api/users** route to get all users and checking the user himself is neither in the given list nor in friends and getting the recommanded user
- created **/api/users/friends** route to get the user's friend's array
- created **/api/users/friends-request/:id/** route to send the friend request to the another user not himself and also not to the already sent friend request to a user
- created **/api/users/friends-request/:id/accept** route to accept the friend request and add the user to the friends array in both
- created **/api/users/friends-requests** route to get all users with pending and accepting both type of requests which was send by other users
- created **/api/users/outgoing-friend-requests** route to get all pending requests which is send by the user himself to another user

### Chat Route
- created chat route for **/api/chat/token** route to get the stream token

## Used Technologies
- MongoDB
- Express.js
- ReactJS
    - TanStackQuery
    - DaisyUI
    - TailwindCSS
- Node.js


<!-- Color #25d366 -->