# API Documentation

This document provides detailed information about the REST API endpoints implemented for the Apollo247 doctor listing clone project.

## Base URL
```
http://localhost:5000/api
```

## Authentication
The API currently does not require authentication. In a production environment, token-based authentication would be implemented.

## Endpoints

### 1. List Doctors
Retrieves a list of doctors with filtering and pagination capabilities.

#### Request
```
GET /doctors
```

#### Query Parameters

| Parameter    | Type             | Description                                        | Example                |
|--------------|------------------|----------------------------------------------------|------------------------|
| page         | number           | Page number for pagination                         | `?page=1`              |
| limit        | number           | Number of results per page                         | `?limit=10`            |
| gender       | string           | Filter by doctor gender                            | `?gender=female`       |
| specialty    | string           | Filter by doctor specialty                         | `?specialty=General Physician` |
| experience   | number           | Minimum years of experience                        | `?experience=5`        |
| availability | string or array  | Filter by day(s) available                         | `?availability=Monday` |
| language     | string or array  | Filter by language(s) spoken                       | `?language=Hindi`      |
| location     | string           | Filter by location                                 | `?location=Delhi`      |
| minFee       | number           | Minimum consultation fee                           | `?minFee=500`          |
| maxFee       | number           | Maximum consultation fee                           | `?maxFee=1000`         |

#### Response
```json
{
  "doctors": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "Dr. Priya Sharma",
      "specialty": "General Physician",
      "experience": 10,
      "qualification": "MBBS, DNB",
      "hospital": "Apollo Clinic",
      "location": "Mumbai",
      "languages": ["English", "Hindi", "Marathi"],
      "availability": ["Monday", "Wednesday", "Friday"],
      "rating": 4.7,
      "consultationFee": 750,
      "imageUrl": "https://example.com/doctor2.jpg",
      "gender": "female",
      "createdAt": "2023-04-27T12:00:00.000Z",
      "updatedAt": "2023-04-27T12:00:00.000Z"
    },
    // More doctors...
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "pages": 3,
    "limit": 10
  }
}
```

### 2. Add Doctor
Creates a new doctor in the database.

#### Request
```
POST /doctors
```

#### Request Body
```json
{
  "name": "Dr. Anand Patel",
  "specialty": "General Physician",
  "experience": 20,
  "qualification": "MBBS, MD (Internal Medicine)",
  "hospital": "Apollo Health City",
  "location": "Hyderabad",
  "languages": ["English", "Hindi", "Telugu"],
  "availability": ["Tuesday", "Thursday", "Saturday"],
  "consultationFee": 1000,
  "imageUrl": "https://example.com/doctor3.jpg",
  "gender": "male"
}
```

#### Response
```json
{
  "_id": "60d21b4667d0d8992e610c86",
  "name": "Dr. Anand Patel",
  "specialty": "General Physician",
  "experience": 20,
  "qualification": "MBBS, MD (Internal Medicine)",
  "hospital": "Apollo Health City",
  "location": "Hyderabad",
  "languages": ["English", "Hindi", "Telugu"],
  "availability": ["Tuesday", "Thursday", "Saturday"],
  "rating": 0,
  "consultationFee": 1000,
  "imageUrl": "https://example.com/doctor3.jpg",
  "gender": "male",
  "createdAt": "2023-04-27T14:30:00.000Z",
  "updatedAt": "2023-04-27T14:30:00.000Z"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages.

### Common Error Codes

| Status Code | Description               | Example Response                                |
|-------------|---------------------------|------------------------------------------------|
| 400         | Bad Request               | `{"errors": [{"msg": "Name is required"}]}`   |
| 404         | Not Found                 | `{"message": "Doctor not found"}`             |
| 500         | Internal Server Error     | `{"message": "Server error"}`                 |

## API Implementation Details

### Controller Implementations

The API controllers use TypeScript and Express.js with proper error handling:

```typescript
export const getDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    // Build filter object based on query parameters
    const filterOptions: any = {};
    
    // Apply filters...
    
    // Execute query with pagination
    const doctors = await Doctor.find(filterOptions)
      .sort({ rating: -1 })
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await Doctor.countDocuments(filterOptions);
    
    res.status(200).json({
      doctors,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit
      }
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
```

### Data Validation

Input validation is implemented using express-validator:

```typescript
const doctorValidation = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('specialty').not().isEmpty().withMessage('Specialty is required'),
  body('experience').isNumeric().withMessage('Experience must be a number'),
  // Additional validation rules...
];
```

### MongoDB Schema

The database schema is defined using Mongoose:

```typescript
const DoctorSchema = new Schema<IDoctor>(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    qualification: { type: String, required: true },
    hospital: { type: String, required: true },
    location: { type: String, required: true },
    languages: [{ type: String, required: true }],
    availability: [{ type: String, required: true }],
    rating: { type: Number, default: 0 },
    consultationFee: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  },
  { timestamps: true }
);
```
