import { Doctor, FilterParams, PaginatedResponse } from './types';

// Mock data for doctors
const mockDoctors: Doctor[] = [
  {
    _id: '1',
    name: 'Dr. Sunita Reddy',
    specialty: 'General Physician',
    experience: 12,
    qualification: 'MBBS, Diploma in Diabetology',
    hospital: 'Apollo Spectra',
    location: 'Bangalore',
    languages: ['English', 'Kannada', 'Telugu'],
    availability: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
    rating: 4.6,
    consultationFee: 850,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EFemale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'female',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '2',
    name: 'Dr. Vikram Singh',
    specialty: 'General Physician',
    experience: 8,
    qualification: 'MBBS, DNB (Family Medicine)',
    hospital: 'Apollo Cradle',
    location: 'Chennai',
    languages: ['English', 'Tamil', 'Hindi'],
    availability: ['Wednesday', 'Friday', 'Saturday'],
    rating: 4.5,
    consultationFee: 700,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EMale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'male',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '3',
    name: 'Dr. Anjali Mehta',
    specialty: 'General Physician',
    experience: 15,
    qualification: 'MBBS, MD (Internal Medicine)',
    hospital: 'Apollo Hospitals',
    location: 'Delhi',
    languages: ['English', 'Hindi', 'Punjabi'],
    availability: ['Monday', 'Wednesday', 'Friday'],
    rating: 4.8,
    consultationFee: 950,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EFemale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'female',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '4',
    name: 'Dr. Ramesh Kumar',
    specialty: 'General Physician',
    experience: 10,
    qualification: 'MBBS, DNB (General Medicine)',
    hospital: 'Apollo Clinics',
    location: 'Hyderabad',
    languages: ['English', 'Telugu', 'Hindi'],
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    rating: 4.3,
    consultationFee: 800,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EMale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'male',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '5',
    name: 'Dr. Preeti Sharma',
    specialty: 'General Physician',
    experience: 7,
    qualification: 'MBBS, Diploma in Family Medicine',
    hospital: 'Apollo Medical Centre',
    location: 'Mumbai',
    languages: ['English', 'Marathi', 'Hindi'],
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    rating: 4.4,
    consultationFee: 750,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EFemale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'female',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '6',
    name: 'Dr. Arjun Nair',
    specialty: 'General Physician',
    experience: 9,
    qualification: 'MBBS, MD (General Medicine)',
    hospital: 'Apollo Spectra',
    location: 'Bangalore',
    languages: ['English', 'Malayalam', 'Kannada'],
    availability: ['Tuesday', 'Thursday', 'Sunday'],
    rating: 4.7,
    consultationFee: 900,
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"%2F%3E%3Ccircle cx="50" cy="40" r="20" fill="%23dddddd"%2F%3E%3Ccircle cx="50" cy="85" r="40" fill="%23dddddd"%2F%3E%3Ctext x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="%23666666"%3EMale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E',
    gender: 'male',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

/**
 * Get mock doctors with filtering and pagination
 * @param filters - Optional filter parameters
 * @param page - Page number (default: 1)
 * @param limit - Number of doctors per page (default: 10)
 * @returns Promise with paginated doctor data
 */
export const getMockDoctors = (
  filters: FilterParams = {}, 
  page: number = 1, 
  limit: number = 10
): Promise<PaginatedResponse<Doctor>> => {
  return new Promise((resolve) => {
    // Filter doctors based on criteria
    let filteredDoctors = [...mockDoctors];
    
    // Apply filters
    if (filters.gender) {
      filteredDoctors = filteredDoctors.filter(
        doctor => doctor.gender === filters.gender
      );
    }
    
    if (filters.experience) {
      filteredDoctors = filteredDoctors.filter(
        doctor => doctor.experience >= filters.experience!
      );
    }
    
    if (filters.location) {
      filteredDoctors = filteredDoctors.filter(
        doctor => doctor.location === filters.location
      );
    }
    
    if (filters.language && filters.language.length > 0) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        filters.language!.some(lang => doctor.languages.includes(lang))
      );
    }
    
    if (filters.availability && filters.availability.length > 0) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        filters.availability!.some(day => doctor.availability.includes(day))
      );
    }
    
    if (filters.fee && (filters.fee.min !== undefined || filters.fee.max !== undefined)) {
      filteredDoctors = filteredDoctors.filter(doctor => {
        let isMatch = true;
        
        if (filters.fee!.min !== undefined) {
          isMatch = isMatch && doctor.consultationFee >= filters.fee!.min;
        }
        
        if (filters.fee!.max !== undefined) {
          isMatch = isMatch && doctor.consultationFee <= filters.fee!.max;
        }
        
        return isMatch;
      });
    }
    
    // Calculate pagination
    const total = filteredDoctors.length;
    const pages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, total);
    
    // Get doctors for the current page
    const pagedDoctors = filteredDoctors.slice(startIndex, endIndex);
    
    // Simulate API delay
    setTimeout(() => {
      resolve({
        doctors: pagedDoctors,
        pagination: {
          total,
          page,
          pages,
          limit
        }
      });
    }, 300);
  });
};
