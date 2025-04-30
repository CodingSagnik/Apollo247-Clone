import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from '../models/Doctor';

// Load environment variables
dotenv.config();

// Sample doctor data
const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'General Physician',
    experience: 15,
    qualification: 'MBBS, MD',
    hospital: 'Apollo Hospital',
    location: 'Delhi',
    languages: ['English', 'Hindi'],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    rating: 4.8,
    consultationFee: 800,
    imageUrl: 'https://example.com/doctor1.jpg',
    gender: 'male'
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    experience: 10,
    qualification: 'MBBS, DNB',
    hospital: 'Apollo Clinic',
    location: 'Mumbai',
    languages: ['English', 'Hindi', 'Marathi'],
    availability: ['Monday', 'Wednesday', 'Friday'],
    rating: 4.7,
    consultationFee: 750,
    imageUrl: 'https://example.com/doctor2.jpg',
    gender: 'female'
  },
  {
    name: 'Dr. Anand Patel',
    specialty: 'General Physician',
    experience: 20,
    qualification: 'MBBS, MD (Internal Medicine)',
    hospital: 'Apollo Health City',
    location: 'Hyderabad',
    languages: ['English', 'Hindi', 'Telugu'],
    availability: ['Tuesday', 'Thursday', 'Saturday'],
    rating: 4.9,
    consultationFee: 1000,
    imageUrl: 'https://example.com/doctor3.jpg',
    gender: 'male'
  },
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
    imageUrl: 'https://example.com/doctor4.jpg',
    gender: 'female'
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
    imageUrl: 'https://example.com/doctor5.jpg',
    gender: 'male'
  },
  {
    name: 'Dr. Meena Gupta',
    specialty: 'General Physician',
    experience: 15,
    qualification: 'MBBS, MD (Internal Medicine)',
    hospital: 'Apollo Hospital',
    location: 'Kolkata',
    languages: ['English', 'Bengali', 'Hindi'],
    availability: ['Monday', 'Wednesday', 'Friday'],
    rating: 4.8,
    consultationFee: 850,
    imageUrl: 'https://example.com/doctor6.jpg',
    gender: 'female'
  },
  {
    name: 'Dr. Arjun Nair',
    specialty: 'General Physician',
    experience: 6,
    qualification: 'MBBS, DNB',
    hospital: 'Apollo Clinic',
    location: 'Pune',
    languages: ['English', 'Marathi', 'Hindi'],
    availability: ['Tuesday', 'Thursday', 'Saturday'],
    rating: 4.4,
    consultationFee: 650,
    imageUrl: 'https://example.com/doctor7.jpg',
    gender: 'male'
  },
  {
    name: 'Dr. Kavita Patel',
    specialty: 'General Physician',
    experience: 18,
    qualification: 'MBBS, MD, FCCP',
    hospital: 'Apollo Hospital',
    location: 'Ahmedabad',
    languages: ['English', 'Gujarati', 'Hindi'],
    availability: ['Monday', 'Thursday', 'Friday'],
    rating: 4.9,
    consultationFee: 950,
    imageUrl: 'https://example.com/doctor8.jpg',
    gender: 'female'
  }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Doctor.deleteMany({});
    console.log('Existing doctors deleted');
    
    // Insert new data
    await Doctor.insertMany(doctors);
    console.log('Sample doctors added successfully');
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();
