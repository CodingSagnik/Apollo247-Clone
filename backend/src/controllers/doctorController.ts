import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Doctor, { IDoctor } from '../models/Doctor';

/**
 * Add a new doctor
 * @route POST /api/doctors
 * @access Public (in a real app, this would be restricted to admin)
 */
export const addDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const doctorData = req.body;
    const newDoctor = new Doctor(doctorData);
    const savedDoctor = await newDoctor.save();
    
    res.status(201).json(savedDoctor);
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Get doctors with filters and pagination
 * @route GET /api/doctors
 * @access Public
 */
export const getDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    // Build filter object based on query parameters
    const filterOptions: any = {};
    
    // Filter by specialty
    if (req.query.specialty) {
      filterOptions.specialty = req.query.specialty;
    }
    
    // Filter by gender
    if (req.query.gender) {
      filterOptions.gender = req.query.gender;
    }
    
    // Filter by experience (minimum years)
    if (req.query.experience) {
      filterOptions.experience = { $gte: parseInt(req.query.experience as string) };
    }
    
    // Filter by availability
    if (req.query.availability) {
      filterOptions.availability = { $in: [req.query.availability] };
    }
    
    // Filter by languages
    if (req.query.language) {
      filterOptions.languages = { $in: [req.query.language] };
    }
    
    // Filter by location
    if (req.query.location) {
      filterOptions.location = req.query.location;
    }
    
    // Filter by consultation fee range
    if (req.query.minFee && req.query.maxFee) {
      filterOptions.consultationFee = { 
        $gte: parseInt(req.query.minFee as string),
        $lte: parseInt(req.query.maxFee as string)
      };
    } else if (req.query.minFee) {
      filterOptions.consultationFee = { $gte: parseInt(req.query.minFee as string) };
    } else if (req.query.maxFee) {
      filterOptions.consultationFee = { $lte: parseInt(req.query.maxFee as string) };
    }
    
    // Execute query with pagination
    const doctors = await Doctor.find(filterOptions)
      .sort({ rating: -1 }) // Sort by rating (highest first)
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
