import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Doctor from '../models/Doctor';

/**
 * @desc    Add a new doctor
 * @route   POST /api/doctors
 * @access  Public
 */
export const addDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    // Create new doctor from request body
    const doctorData = req.body;
    const newDoctor = new Doctor(doctorData);
    
    // Save to database
    const savedDoctor = await newDoctor.save();
    
    // Return success response with created doctor
    res.status(201).json({
      success: true,
      data: savedDoctor
    });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ 
      success: false,
      message: error instanceof Error ? error.message : 'Server error' 
    });
  }
};

/**
 * @desc    Get doctors with filtering and pagination
 * @route   GET /api/doctors
 * @access  Public
 */
export const getDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    // Parse pagination parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Build filter object based on query parameters
    const filterOptions: any = {};

    // Filter by gender
    if (req.query.gender) {
      filterOptions.gender = req.query.gender;
    }

    // Filter by experience (minimum years)
    if (req.query.experience) {
      filterOptions.experience = { $gte: parseInt(req.query.experience as string) };
    }

    // Filter by location
    if (req.query.location) {
      filterOptions.location = req.query.location;
    }

    // Filter by availability days
    if (req.query.availability) {
      const availabilityDays = Array.isArray(req.query.availability)
        ? req.query.availability
        : [req.query.availability];
      
      filterOptions.availability = { $in: availabilityDays };
    }

    // Filter by languages
    if (req.query.language) {
      const languages = Array.isArray(req.query.language)
        ? req.query.language
        : [req.query.language];
      
      filterOptions.languages = { $in: languages };
    }

    // Filter by fee range
    if (req.query.minFee || req.query.maxFee) {
      filterOptions.consultationFee = {};
      
      if (req.query.minFee) {
        filterOptions.consultationFee.$gte = parseInt(req.query.minFee as string);
      }
      
      if (req.query.maxFee) {
        filterOptions.consultationFee.$lte = parseInt(req.query.maxFee as string);
      }
    }

    // Execute query with pagination
    const doctors = await Doctor.find(filterOptions)
      .sort({ rating: -1 })
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await Doctor.countDocuments(filterOptions);
    
    // Return results with pagination metadata
    res.status(200).json({
      success: true,
      data: {
        doctors,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
          limit
        }
      }
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ 
      success: false,
      message: error instanceof Error ? error.message : 'Server error' 
    });
  }
};

/**
 * @desc    Get single doctor by ID
 * @route   GET /api/doctors/:id
 * @access  Public
 */
export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    
    if (!doctor) {
      res.status(404).json({ 
        success: false,
        message: 'Doctor not found' 
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({ 
      success: false,
      message: error instanceof Error ? error.message : 'Server error' 
    });
  }
};
