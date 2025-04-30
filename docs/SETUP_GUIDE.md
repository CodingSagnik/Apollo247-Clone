# Setup Guide: Apollo247 Doctor Listing Clone

This guide provides detailed instructions for setting up and running the Apollo247 doctor listing clone project. It includes workarounds for common environment issues you might encounter.

## Prerequisites

- **Node.js**: Version 18.18.0 or higher recommended (for Next.js compatibility)
- **MongoDB**: Local installation or MongoDB Atlas account
- **Package Manager**: npm or yarn

## Environment Setup Options

### Option 1: Standard Setup (Recommended for Node.js 18.18.0+)

#### Backend Setup
1. Navigate to the backend directory:
   ```
   cd apollo-clone/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure MongoDB:
   - For local MongoDB, ensure MongoDB service is running
   - For MongoDB Atlas, update the connection string in `.env`

4. Seed the database with sample doctors:
   ```
   npm run seed
   ```

5. Start the development server:
   ```
   npm run dev
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd apollo-clone/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Option 2: Compatibility Mode (For Node.js 18.17.x)

If you're using Node.js 18.17.x which has compatibility issues with the latest Next.js:

#### For the Frontend:
1. Navigate to the frontend directory
   ```
   cd apollo-clone/frontend
   ```

2. Install specific compatible versions:
   ```
   npm install next@13.4.19 react@18.2.0 react-dom@18.2.0
   npm install --save-dev typescript@4.9.5 @types/react@18.0.28 @types/react-dom@18.0.11 @types/node@18.15.0
   ```

3. Set OpenSSL legacy provider flag:
   ```
   # For Windows PowerShell
   $env:NODE_OPTIONS="--openssl-legacy-provider"
   
   # For Windows Command Prompt
   set NODE_OPTIONS=--openssl-legacy-provider
   
   # For Linux/Mac
   export NODE_OPTIONS=--openssl-legacy-provider
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Troubleshooting

### MongoDB Connection Issues
If you encounter MongoDB connection issues:

1. Check if MongoDB is running locally:
   ```
   # For Windows
   sc query MongoDB
   
   # For Linux/Mac
   sudo systemctl status mongod
   ```

2. Alternative: Use MongoDB Atlas (Cloud)
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and get your connection string
   - Update the `.env` file with your connection string

### Next.js Compatibility Issues
If you encounter Next.js compatibility issues:

1. Check your Node.js version:
   ```
   node -v
   ```

2. If upgrading Node.js is not an option, downgrade Next.js:
   ```
   npm install next@13.4.19 react@18.2.0 react-dom@18.2.0
   ```

3. If you still encounter issues, create a new React app instead:
   ```
   npx create-react-app apollo-frontend --template typescript
   ```
   Then copy the components from the Next.js app to the new React app.

## Project Structure

```
apollo-clone/
├── backend/              # Express/MongoDB backend
│   ├── src/              # TypeScript source files
│   │   ├── controllers/  # API controllers
│   │   ├── models/       # Database models
│   │   └── routes/       # API routes
│   └── .env              # Environment configuration
├── frontend/             # Next.js frontend
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   └── specialties/  # Doctor specialties pages
│   ├── components/       # React components
│   └── public/           # Static assets
└── docs/                 # Project documentation
```

## Accessing the Application

- Backend API: http://localhost:5000
- Frontend: http://localhost:3000
- Doctor Listing Page: http://localhost:3000/specialties/general-physician-internal-medicine

## Pixel-Perfect Design Notes

This application implements the exact Apollo247 design with:
- **Mont font** throughout (not Montserrat)
- Exact dimensions: title width: 353px, height: 32px
- Precise colors: background #0B0809, grey #333333, button #3643FB, text #F5F5F5
- Responsive layouts specifically optimized for 393 × 852px display size
