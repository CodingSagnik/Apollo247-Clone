import mongoose from 'mongoose';
import Doctor from '../models/Doctor';
import connectDB from './db';

// Sample doctor data for seeding the database
const doctorData = [
  {
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
    imageUrl: '/images/doctors/female-doctor-1.jpg',
    gender: 'female',
  },
  {
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
    imageUrl: '/images/doctors/male-doctor-1.jpg',
    gender: 'male',
  },
  {
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
    imageUrl: '/images/doctors/female-doctor-2.jpg',
    gender: 'female',
  },
  {
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
    imageUrl: '/images/doctors/male-doctor-2.jpg',
    gender: 'male',
  },
  {
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
    imageUrl: '/images/doctors/female-doctor-3.jpg',
    gender: 'female',
  },
  {
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
    imageUrl: '/images/doctors/male-doctor-3.jpg',
    gender: 'male',
  }
];

// Function to seed the database
const seedDatabase = async (): Promise<void> => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Clear existing data
    await Doctor.deleteMany({});
    console.log('Existing doctors data cleared');
    
    // Insert new doctor data
    await Doctor.insertMany(doctorData);
    console.log('Database seeded successfully with sample doctors');
    
    mongoose.disconnect();
    console.log('MongoDB disconnected after seeding');
  } catch (error) {
    console.error(`Error seeding database: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }
};

// Run the seeder
if (require.main === module) {
  seedDatabase();
}

export default seedDatabase;
