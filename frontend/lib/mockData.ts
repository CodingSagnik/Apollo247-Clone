// Doctor interface definition
export interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  experience: number;
  qualification: string;
  hospital: string;
  location: string;
  languages: string[];
  availability: string[];
  rating: number;
  consultationFee: number;
  imageUrl: string;
  gender: 'male' | 'female' | 'other';
  createdAt: string;
  updatedAt: string;
}

// Pagination response interface
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    pages: number;
    limit: number;
  };
}

// Filter parameters interface
export interface FilterParams {
  gender?: string;
  experience?: string;
  availability?: string[];
  language?: string[];
  location?: string;
  fee?: { min: number; max: number };
  page?: number;
  limit?: number;
}

// Mock data for doctors
export const mockDoctors: Doctor[] = [
  {
    _id: "60d21b4667d0d8992e610c85",
    name: "Dr. Rajesh Kumar",
    specialty: "General Physician",
    experience: 15,
    qualification: "MBBS, MD",
    hospital: "Apollo Hospital",
    location: "Delhi",
    languages: ["English", "Hindi"],
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    rating: 4.8,
    consultationFee: 800,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "male",
    createdAt: "2023-04-27T10:30:00.000Z",
    updatedAt: "2023-04-27T10:30:00.000Z"
  },
  {
    _id: "60d21b4667d0d8992e610c86",
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    experience: 10,
    qualification: "MBBS, DNB",
    hospital: "Apollo Clinic",
    location: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.7,
    consultationFee: 750,
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "female",
    createdAt: "2023-04-27T11:45:00.000Z",
    updatedAt: "2023-04-27T11:45:00.000Z"
  },
  {
    _id: "60d21b4667d0d8992e610c87",
    name: "Dr. Anand Patel",
    specialty: "General Physician",
    experience: 20,
    qualification: "MBBS, MD (Internal Medicine)",
    hospital: "Apollo Health City",
    location: "Hyderabad",
    languages: ["English", "Hindi", "Telugu"],
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.9,
    consultationFee: 1000,
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "male",
    createdAt: "2023-04-27T12:00:00.000Z",
    updatedAt: "2023-04-27T12:00:00.000Z"
  },
  {
    _id: "60d21b4667d0d8992e610c88",
    name: "Dr. Sunita Reddy",
    specialty: "General Physician",
    experience: 12,
    qualification: "MBBS, Diploma in Diabetology",
    hospital: "Apollo Spectra",
    location: "Bangalore",
    languages: ["English", "Kannada", "Telugu"],
    availability: ["Monday", "Tuesday", "Thursday", "Saturday"],
    rating: 4.6,
    consultationFee: 850,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "female",
    createdAt: "2023-04-27T13:15:00.000Z",
    updatedAt: "2023-04-27T13:15:00.000Z"
  },
  {
    _id: "60d21b4667d0d8992e610c89",
    name: "Dr. Vikram Singh",
    specialty: "General Physician",
    experience: 8,
    qualification: "MBBS, DNB (Family Medicine)",
    hospital: "Apollo Cradle",
    location: "Chennai",
    languages: ["English", "Tamil", "Hindi"],
    availability: ["Wednesday", "Friday", "Saturday"],
    rating: 4.5,
    consultationFee: 700,
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "male",
    createdAt: "2023-04-27T14:30:00.000Z",
    updatedAt: "2023-04-27T14:30:00.000Z"
  },
  {
    _id: "60d21b4667d0d8992e610c8a",
    name: "Dr. Meena Gupta",
    specialty: "General Physician",
    experience: 15,
    qualification: "MBBS, MD (Internal Medicine)",
    hospital: "Apollo Hospital",
    location: "Kolkata",
    languages: ["English", "Bengali", "Hindi"],
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.8,
    consultationFee: 850,
    imageUrl: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
    gender: "female",
    createdAt: "2023-04-27T15:45:00.000Z",
    updatedAt: "2023-04-27T15:45:00.000Z"
  }
];

/**
 * Function to simulate API response with pagination and filtering
 * @param params Filter parameters
 * @returns Promise with paginated and filtered doctor data
 */
export const getMockDoctors = (params: FilterParams): Promise<PaginatedResponse<Doctor>> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      let filteredDoctors = [...mockDoctors];
      
      // Apply filters
      if (params.gender) {
        filteredDoctors = filteredDoctors.filter(doc => doc.gender === params.gender);
      }
      
      if (params.experience) {
        const [min, max] = params.experience.split('-').map(Number);
        if (max) {
          filteredDoctors = filteredDoctors.filter(doc => doc.experience >= min && doc.experience <= max);
        } else {
          filteredDoctors = filteredDoctors.filter(doc => doc.experience >= min);
        }
      }
      
      if (params.location) {
        filteredDoctors = filteredDoctors.filter(doc => doc.location.toLowerCase() === params.location?.toLowerCase());
      }
      
      if (params.availability && params.availability.length > 0) {
        filteredDoctors = filteredDoctors.filter(doc => 
          params.availability?.some(day => doc.availability.includes(day))
        );
      }
      
      if (params.language && params.language.length > 0) {
        filteredDoctors = filteredDoctors.filter(doc => 
          params.language?.some(lang => doc.languages.includes(lang))
        );
      }
      
      if (params.fee) {
        filteredDoctors = filteredDoctors.filter(doc => 
          doc.consultationFee >= params.fee!.min && doc.consultationFee <= params.fee!.max
        );
      }
      
      // Pagination
      const page = params.page || 1;
      const limit = params.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);
      
      // Return response
      resolve({
        data: paginatedDoctors,
        pagination: {
          total: filteredDoctors.length,
          page,
          pages: Math.ceil(filteredDoctors.length / limit),
          limit
        }
      });
    }, 500);
  });
};
