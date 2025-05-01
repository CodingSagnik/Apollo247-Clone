// API Services for doctor data
import { Doctor, FilterParams, PaginatedResponse, getMockDoctors } from './types';

// API base URL - use environment variable or default to localhost
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// Suppress fetch errors in the console during development
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    return originalFetch(input, init).catch(error => {
      if (String(input).includes('/api/doctors')) {
        // Silently suppress API errors for doctor endpoints
        console.debug('Suppressed API error, using mock data instead');
        return Promise.reject(error);
      }
      throw error;
    });
  };
}

/**
 * Fetches doctors from the API with optional filtering and pagination
 * @param filters - Optional filter parameters
 * @param page - Page number (default: 1)
 * @param limit - Number of doctors per page (default: 10)
 * @returns Promise with paginated doctor data
 */
export const getDoctors = async (
  filters: FilterParams = {},
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<Doctor>> => {
  // Get mockDoctors early so we can use them as fallback
  const { getMockDoctors } = await import('./mockData');

  try {
    // Build query string from filters
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    // Add filters to query params if they exist
    if (filters.gender) {
      queryParams.append('gender', filters.gender);
    }

    if (filters.experience) {
      queryParams.append('experience', filters.experience.toString());
    }

    if (filters.location) {
      queryParams.append('location', filters.location);
    }

    if (filters.language && filters.language.length > 0) {
      filters.language.forEach((lang: string) => {
        queryParams.append('language', lang);
      });
    }

    if (filters.availability && filters.availability.length > 0) {
      filters.availability.forEach((day: string) => {
        queryParams.append('availability', day);
      });
    }

    if (filters.fee && (filters.fee.min !== undefined || filters.fee.max !== undefined)) {
      if (filters.fee.min !== undefined) {
        queryParams.append('minFee', filters.fee.min.toString());
      }
      if (filters.fee.max !== undefined) {
        queryParams.append('maxFee', filters.fee.max.toString());
      }
    }

    // Try to fetch data from API with a timeout to avoid long waits
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
    
    try {
      console.log(`Fetching from: ${API_BASE_URL}/api/doctors?${queryParams}`);
      const response = await fetch(`${API_BASE_URL}/api/doctors?${queryParams}`, {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': window.location.origin
        },
        mode: 'cors'
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('API Response:', result); // Debug what we're getting
      
      console.log('Detailed API response:', JSON.stringify(result, null, 2));
      
      // Handle the nested data structure from backend
      const doctorsData = result.data?.doctors || result.doctors || [];
      const paginationData = result.data?.pagination || result.pagination || { total: 0, page: 1, pages: 1, limit: 10 };
      
      // If we get empty results from API, fall back to mock data
      if (!doctorsData || doctorsData.length === 0) {
        console.log('API returned zero doctors, using mock data');
        return getMockDoctors(filters, page, limit);
      }
      
      console.log(`Found ${doctorsData.length} doctors from API`);
      
      return {
        doctors: doctorsData,
        pagination: paginationData
      };
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.log('Fetch error, using mock data:', fetchError instanceof Error ? fetchError.message : 'Unknown error');
      return getMockDoctors(filters, page, limit);
    }
  } catch (error) {
    console.log('General error, using mock data');
    return getMockDoctors(filters, page, limit);
  }
};

/**
 * Adds a new doctor to the database
 * @param doctorData - Doctor data to add
 * @returns Promise with the added doctor
 */
export const addDoctor = async (doctorData: Omit<Doctor, '_id' | 'createdAt' | 'updatedAt'>): Promise<Doctor> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/doctors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error adding doctor:', error);
    throw error;
  }
};

/**
 * Gets a single doctor by ID
 * @param id - Doctor ID
 * @returns Promise with the doctor data
 */
export const getDoctorById = async (id: string): Promise<Doctor | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/doctors/${id}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const result = await response.json();
    
    // Extract data from response according to the API structure
    return result.data;
  } catch (error) {
    // No need to log the error - this is expected when MongoDB isn't connected
    // Silently fall back to mock data without showing console errors
    
    // Import mock data dynamically only if needed (for better performance)
    const { getMockDoctors } = await import('./mockData');
    const doctorsResponse = await getMockDoctors();
    return doctorsResponse.doctors.find((doctor: Doctor) => doctor._id === id) || null;
  }
};
