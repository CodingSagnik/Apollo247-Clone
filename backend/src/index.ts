import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import doctorRoutes from './routes/doctorRoutes';
import path from 'path';

// Load environment variables
dotenv.config();

// Connect to MongoDB (with fallback for development)
try {
  connectDB();
  console.log('Attempting to connect to MongoDB...');
} catch (error) {
  console.log('MongoDB connection failed - running in mock data mode');
}

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware with enhanced CORS configuration
app.use(cors({
  origin: '*', // Allow requests from any origin in development/testing
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the images directory
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// API Routes
app.use('/api/doctors', doctorRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Apollo247 Clone API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});
