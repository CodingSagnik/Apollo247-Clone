// Script to add a new doctor to the database
const axios = require('axios');

const addDoctor = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/doctors', {
      name: "Dr. Dat Ray",
      specialty: "General Physician",
      experience: 10,
      qualification: "MBBS, MD (Internal Medicine)",
      hospital: "Apollo Hospitals",
      location: "Mumbai",
      languages: ["English", "Hindi", "Bengali"],
      availability: ["Monday", "Wednesday", "Friday"],
      rating: 4.7,
      consultationFee: 900,
      imageUrl: "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Crect width=\"100\" height=\"100\" fill=\"%23f0f0f0\"%2F%3E%3Ccircle cx=\"50\" cy=\"40\" r=\"20\" fill=\"%23dddddd\"%2F%3E%3Ccircle cx=\"50\" cy=\"85\" r=\"40\" fill=\"%23dddddd\"%2F%3E%3Ctext x=\"50\" y=\"115\" font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" fill=\"%23666666\"%3EMale Doctor%3C%2Ftext%3E%3C%2Fsvg%3E",
      gender: "male"
    });

    console.log('Doctor added successfully:', response.data);
  } catch (error) {
    console.error('Error adding doctor:', error.response ? error.response.data : error.message);
  }
};

// Run the function
addDoctor();
