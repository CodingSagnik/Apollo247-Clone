/**
 * Types for the Apollo247 clone application
 */

// Doctor interface matching MongoDB schema
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
  createdAt?: string;
  updatedAt?: string;
}

// Fee range filter type
export interface FeeRange {
  min?: number;
  max?: number;
}

// Filter parameters interface
export interface FilterParams {
  gender?: string;
  experience?: number;
  availability?: string[];
  language?: string[];
  location?: string;
  fee?: FeeRange;
}

// Pagination metadata interface
export interface PaginationData {
  total: number;
  page: number;
  pages: number;
  limit: number;
}

// Paginated response interface
export interface PaginatedResponse<T> {
  doctors: T[];
  pagination: PaginationData;
}

// Re-export getMockDoctors from mockData for fallback
export { getMockDoctors } from './mockData';
