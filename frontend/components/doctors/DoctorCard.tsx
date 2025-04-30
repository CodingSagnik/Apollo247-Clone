import React from 'react';
import Image from 'next/image';

type DoctorCardProps = {
  doctor: {
    _id: string;
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
    gender: string;
  };
};

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Doctor Image and Basic Info */}
        <div className="md:col-span-1 p-4 flex flex-col items-center bg-gray-50">
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-3" style={{ position: 'relative' }}>
            <Image 
              src={doctor.imageUrl} 
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 128px"
            />
          </div>
          <h3 className="text-center font-bold text-lg text-apollo-dark mb-1">{doctor.name}</h3>
          <p className="text-center text-sm text-apollo-grey mb-1">{doctor.specialty}</p>
          <div className="flex items-center justify-center mb-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {doctor.experience} Years Experience
            </span>
          </div>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-bold">{doctor.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        {/* Doctor Details */}
        <div className="md:col-span-3 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Qualification</h4>
                <p className="text-apollo-dark">{doctor.qualification}</p>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Hospital</h4>
                <p className="text-apollo-dark">{doctor.hospital}, {doctor.location}</p>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Languages</h4>
                <p className="text-apollo-dark">{doctor.languages.join(', ')}</p>
              </div>
            </div>
            
            <div>
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Availability</h4>
                <p className="text-apollo-dark">{doctor.availability.join(', ')}</p>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Consultation Fee</h4>
                <p className="text-xl font-bold text-apollo-dark">₹{doctor.consultationFee}</p>
              </div>
              
              <div className="mt-5">
                <button className="w-full bg-apollo-blue text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-200">
                  Book Appointment/Consult Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
