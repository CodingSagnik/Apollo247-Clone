import mongoose, { Document, Schema } from 'mongoose';

// Doctor document interface
export interface IDoctor extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

// Doctor schema
const DoctorSchema = new Schema<IDoctor>(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    qualification: { type: String, required: true },
    hospital: { type: String, required: true },
    location: { type: String, required: true },
    languages: [{ type: String, required: true }],
    availability: [{ type: String, required: true }],
    rating: { type: Number, default: 0 },
    consultationFee: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  },
  { timestamps: true }
);

// Create and export the Doctor model
const Doctor = mongoose.model<IDoctor>('Doctor', DoctorSchema);

export default Doctor;
