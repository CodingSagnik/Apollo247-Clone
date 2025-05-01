import express from 'express';
import { addDoctor, getDoctors, getDoctorById } from '../controllers/doctorController';
import { body } from 'express-validator';

const router = express.Router();

// Validation middleware for adding a doctor
const doctorValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('specialty').notEmpty().withMessage('Specialty is required'),
  body('experience').isNumeric().withMessage('Experience must be a number'),
  body('qualification').notEmpty().withMessage('Qualification is required'),
  body('hospital').notEmpty().withMessage('Hospital is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('languages').isArray().withMessage('Languages must be an array'),
  body('availability').isArray().withMessage('Availability must be an array'),
  body('consultationFee').isNumeric().withMessage('Consultation fee must be a number'),
  body('imageUrl').notEmpty().withMessage('Image URL is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
];

// GET all doctors with filtering and pagination
router.get('/', getDoctors);

// GET single doctor by ID
router.get('/:id', getDoctorById);

// POST add new doctor
router.post('/', doctorValidation, addDoctor);

export default router;
