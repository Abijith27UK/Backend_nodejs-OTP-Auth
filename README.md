# OTP Authentication Backend

This project is a backend implementation of an OTP (One-Time Password) authentication system using Node.js, Express, and MongoDB. It allows users to sign up and sign in using their phone numbers, with OTP verification for added security.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- User signup with OTP verification
- User signin with OTP verification
- Fetch all registered users
- Secure JWT token generation for authenticated users

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens)
- dotenv (for environment variable management)
- node-fetch (for making API requests)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abijith27UK/Backend_nodejs-OTP-Auth.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Backend_nodejs-OTP-Auth
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (see below).

## Usage

1. Start the server in development mode:
   ```bash
   npm run dev
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /signup**: Sign up a new user and send an OTP.
- **POST /signup/verify**: Verify the OTP for signup.
- **POST /signin**: Sign in an existing user and send an OTP.
- **POST /signin/verify**: Verify the OTP for signin.
- **GET /users**: Retrieve all registered users.

## Environment Variables

Create a `.env` file in the root directory with the following variables:
