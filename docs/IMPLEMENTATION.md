# Apollo247 Doctor Listing Clone - Technical Implementation

This document outlines the technical implementation details of the Apollo247 doctor listing clone project, focusing on the pixel-perfect UI implementation, backend API development, and overall architecture.

## UI Implementation Details

### Font Requirements
- **Primary Font**: Mont (not Montserrat)
- **Font Weights**: Regular (400) and Bold (700)
- **Implementation**: Font files are stored in `/public/fonts/` and imported in CSS

### Color Palette
The application strictly adheres to Apollo247's color scheme:
- **Background Dark**: `#0B0809`
- **Grey Text**: `#333333`
- **Primary Blue**: `#3643FB`
- **Light Background/Text**: `#F5F5F5`

All colors are defined as CSS variables and implemented through Tailwind CSS theme extension.

### Component Dimensions
Exact dimensions were implemented according to the design specifications:
- Title width: 353px, height: 32px
- Doctor cards follow responsive layouts with precise padding and margins
- Filter sidebar maintains a fixed width of 320px on desktop

### Responsive Design
The application is fully responsive with specific breakpoints for:
- Mobile: 393 × 852px (primary target for Apollo247 mobile experience)
- Tablet: 768px and above
- Desktop: 1024px and above

## Backend Implementation

### Database Schema
The MongoDB data model for doctors includes:
```typescript
{
  name: String,
  specialty: String,
  experience: Number,
  qualification: String,
  hospital: String,
  location: String,
  languages: [String],
  availability: [String],
  rating: Number,
  consultationFee: Number,
  imageUrl: String,
  gender: String
}
```

### API Endpoints
Two primary RESTful API endpoints were implemented:

1. **Add Doctor**
   - Endpoint: `POST /api/doctors`
   - Features:
     - Input validation with express-validator
     - Error handling with appropriate status codes
     - MongoDB document creation

2. **List Doctors with Filters**
   - Endpoint: `GET /api/doctors`
   - Filtering capabilities:
     - By gender, experience, availability
     - By location, languages spoken
     - By consultation fee range
   - Pagination implementation:
     - Configurable page size
     - Total count information
     - Page navigation metadata

### Technology Stack
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **API Integration**: Custom axios-based service layer with TypeScript interfaces

## SEO Optimization
SEO best practices were implemented in the Next.js frontend:
- Proper metadata with title and description
- Semantic HTML structure
- Optimized loading performance

## Testing Strategy
The application includes:
- Comprehensive API testing plan
- UI component testing documentation
- Performance metrics baseline

## Development Setup Requirements
- Node.js 18.18.0 or higher
- MongoDB (local or Atlas)
- NPM or Yarn package manager

## Future Enhancements
- User authentication system
- Doctor appointment booking functionality
- Patient review system
- Real-time availability updates
