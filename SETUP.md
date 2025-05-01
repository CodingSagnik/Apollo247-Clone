# Apollo247 Clone - Setup Guide

This guide will help you set up and run the Apollo247 clone project, which includes a Next.js frontend and a MongoDB backend.

## Project Overview

This Apollo247 clone implements:
- Frontend doctor listing page with the exact Apollo247 UI
- Backend REST API with MongoDB database
- Two required API endpoints: add-doctor and list-doctor-with-filter (with pagination)
- Filter functionality (gender, experience, location, languages, availability, fee)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/CodingSagnik/Apollo247-Clone.git
cd Apollo247-Clone
```

### 2. Install Dependencies

Install the root project dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

Install backend dependencies:

```bash
cd backend
npm install
cd ..
```

### 3. Configure Environment Variables

Create or update the `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/apollo-clone
NODE_ENV=development
```

If you're using MongoDB Atlas, replace the MONGODB_URI with your connection string.

### 4. Seed the Database

Run the seeding script to populate the database with initial doctor data:

```bash
npm run seed
```

### 5. Start the Development Servers

Start both frontend and backend servers concurrently:

```bash
npm start
```

Or start them individually:

```bash
# Frontend only
npm run start:frontend

# Backend only
npm run start:backend
```

## Accessing the Application

- Frontend: http://localhost:3000/specialties/general-physician-internal-medicine
- Backend API: http://localhost:5000/api/doctors

## API Endpoints

### List Doctors with Filters

```
GET /api/doctors
```

Query parameters:
- `page`: Page number (default: 1)
- `limit`: Number of doctors per page (default: 10)
- `gender`: Filter by gender (male/female/other)
- `experience`: Minimum years of experience
- `location`: Filter by location
- `language`: Filter by languages (can be multiple)
- `availability`: Filter by availability days (can be multiple)
- `minFee`: Minimum consultation fee
- `maxFee`: Maximum consultation fee

### Add Doctor

```
POST /api/doctors
```

Request body:
```json
{
  "name": "Dr. Example",
  "specialty": "General Physician",
  "experience": 10,
  "qualification": "MBBS, MD",
  "hospital": "Apollo Hospital",
  "location": "Mumbai",
  "languages": ["English", "Hindi"],
  "availability": ["Monday", "Wednesday", "Friday"],
  "consultationFee": 800,
  "imageUrl": "/images/doctors/example.jpg",
  "gender": "male"
}
```

## Deployment

The project is set up for deployment on:
- Frontend: Netlify or Vercel
- Backend: Heroku, Railway, or similar services

## Project Structure

- `/frontend`: Next.js frontend application
- `/backend`: Express/MongoDB backend API
- `/docs`: Additional documentation

## Credits

Made by Sagnik Ray for Andaz Kumar's Full Stack Development internship
