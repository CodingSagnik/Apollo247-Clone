import express from 'express';
import { body } from 'express-validator';
import { addDoctor, getDoctors } from '../controllers/doctorController';

const router = express.Router();

// Validation rules for adding a doctor
const doctorValidation = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('specialty').not().isEmpty().withMessage('Specialty is required'),
  body('experience').isNumeric().withMessage('Experience must be a number'),
  body('qualification').not().isEmpty().withMessage('Qualification is required'),
  body('hospital').not().isEmpty().withMessage('Hospital is required'),
  body('location').not().isEmpty().withMessage('Location is required'),
  body('languages').isArray().withMessage('Languages must be an array'),
  body('availability').isArray().withMessage('Availability must be an array'),
  body('consultationFee').isNumeric().withMessage('Consultation fee must be a number'),
  body('imageUrl').not().isEmpty().withMessage('Image URL is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other')
];

// POST /api/doctors - Add a new doctor
router.post('/', doctorValidation, addDoctor);

// GET /api/doctors - Get doctors with filters and pagination
router.get('/', getDoctors);

export default router;
