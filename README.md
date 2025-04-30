# Apollo247 Doctor Listing Clone

This project is a clone of the Apollo247 doctor listing page, focusing specifically on the General Physician specialty page. It includes both frontend and backend components, with full filtering capabilities and REST API implementation.

## Project Structure

```
apollo-clone/
├── frontend/              # Next.js frontend application
│   ├── app/               # App router pages and layouts
│   ├── components/        # React components
│   ├── lib/               # API services and utilities
│   └── public/            # Static assets
└── backend/               # Express/MongoDB backend
    ├── src/               # Source code
    │   ├── config/        # Configuration files
    │   ├── controllers/   # API controllers
    │   ├── middleware/    # Express middleware
    │   ├── models/        # MongoDB schemas
    │   └── routes/        # API routes
    └── .env               # Environment variables
```

## Features Implemented

### Frontend
- Pixel-perfect UI based on Apollo247 design with Mont font
- Complete doctors listing page with filters
- Responsive design for different screen sizes
- Advanced SEO optimization
- Integration with backend API for doctor data

### Backend
- RESTful API with two endpoints:
  - `POST /api/doctors` - Add a new doctor
  - `GET /api/doctors` - List doctors with filtering and pagination
- MongoDB integration with Mongoose
- Filter capabilities for:
  - Gender
  - Experience
  - Availability
  - Location
  - Languages
  - Consultation fee range
- Pagination for optimal performance

## Technologies Used

### Frontend
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS for styling
- React hooks for state management

### Backend
- Node.js/Express
- TypeScript
- MongoDB with Mongoose
- Express-validator for input validation

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd apollo-clone/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Ensure MongoDB is running locally or update the connection string in `.env`

4. Seed the database with sample doctors:
   ```
   npm run seed
   ```

5. Start the development server:
   ```
   npm run dev
   ```

The backend API will be available at http://localhost:5000

### Frontend Setup
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

The frontend application will be available at http://localhost:3000

## API Endpoints

### Add Doctor
- **URL:** `/api/doctors`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Doctor Name",
    "specialty": "General Physician",
    "experience": 10,
    "qualification": "MBBS, MD",
    "hospital": "Apollo Hospital",
    "location": "Delhi",
    "languages": ["English", "Hindi"],
    "availability": ["Monday", "Wednesday", "Friday"],
    "consultationFee": 800,
    "imageUrl": "https://example.com/doctor.jpg",
    "gender": "male"
  }
  ```

### List Doctors with Filters
- **URL:** `/api/doctors`
- **Method:** `GET`
- **Query Parameters:**
  - `page`: Page number (default: 1)
  - `limit`: Number of results per page (default: 10)
  - `specialty`: Filter by specialty
  - `gender`: Filter by gender
  - `experience`: Minimum years of experience
  - `availability`: Filter by day available
  - `language`: Filter by language spoken
  - `location`: Filter by location
  - `minFee`: Minimum consultation fee
  - `maxFee`: Maximum consultation fee

## Developer

Made by Sagnik Ray for Andaz Kumar's Full Stack Development internship.

## Future Improvements
- User authentication and authorization
- Doctor appointment booking functionality
- Review and rating system
- Online consultation features
- More specialty pages

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

## Screenshots

(Screenshots will be added after deployment)

## License

This project is for demonstration purposes only. All rights to the original Apollo247 design belong to their respective owners.
