// API Services for doctor data
import { Doctor, FilterParams, PaginatedResponse, getMockDoctors } from './mockData';

/**
 * API Service to handle all doctor-related data operations
 * This is a mock implementation that uses local data for demonstration
 */
const apiService = {
  /**
   * Get doctors with optional filters
   * @param filters Filter parameters for doctors
   * @returns Promise with paginated doctor data
   */
  getDoctors(filters: FilterParams = {}): Promise<PaginatedResponse<Doctor>> {
    try {
      // In a real app, this would call the backend API
      // Instead, we use the mock data implementation
      return getMockDoctors(filters);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      return Promise.reject(error);
    }
  },

  /**
   * Add a new doctor 
   * @param doctorData New doctor data
   * @returns Promise with created doctor
   */
  addDoctor(doctorData: Omit<Doctor, '_id' | 'createdAt' | 'updatedAt'>): Promise<Doctor> {
    return new Promise((resolve, reject) => {
      try {
        // Simulate API call delay
        setTimeout(() => {
          // In a real app, this would post to the backend API
          const newDoctor: Doctor = {
            _id: `mock-${Date.now()}`,
            ...doctorData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          // Return the newly created doctor
          resolve(newDoctor);
        }, 500);
      } catch (error) {
        console.error('Error adding doctor:', error);
        reject(error);
      }
    });
  },
  
  /**
   * Get doctor details by ID
   * @param id Doctor ID
   * @returns Promise with doctor details
   */
  getDoctorById(id: string): Promise<Doctor | null> {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        const doctor = getMockDoctors({ limit: 100 }).then(response => {
          return response.data.find(doctor => doctor._id === id) || null;
        });
        resolve(doctor);
      }, 300);
    });
  }
};

export default apiService;
