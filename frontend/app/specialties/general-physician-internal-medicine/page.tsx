'use client';

import React, { useState, useEffect } from 'react';
import { mockDoctors } from '@/lib/mockData';
import { CSSProperties } from 'react';

// Filter options
const experienceFilters = [
  { id: '0-5', label: '0-5 years' },
  { id: '5-10', label: '5-10 years' },
  { id: '10-15', label: '10-15 years' },
  { id: '15+', label: '15+ years' },
] as const;

const languageFilters = [
  { id: 'english', label: 'English' },
  { id: 'hindi', label: 'Hindi' },
  { id: 'tamil', label: 'Tamil' },
  { id: 'telugu', label: 'Telugu' },
  { id: 'kannada', label: 'Kannada' },
] as const;

const availabilityFilters = [
  { id: 'monday', label: 'Monday' },
  { id: 'tuesday', label: 'Tuesday' },
  { id: 'wednesday', label: 'Wednesday' },
  { id: 'thursday', label: 'Thursday' },
  { id: 'friday', label: 'Friday' },
] as const;

const locationFilters = [
  { id: 'delhi', label: 'Delhi' },
  { id: 'mumbai', label: 'Mumbai' },
  { id: 'bangalore', label: 'Bangalore' },
  { id: 'chennai', label: 'Chennai' },
  { id: 'hyderabad', label: 'Hyderabad' },
] as const;

// Styles based on exact requirements with proper TypeScript typing
const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
  },
  header: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '12px 0',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#3643FB',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    color: '#333333',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '14px',
  },
  authButtons: {
    display: 'flex',
    gap: '12px',
  },
  loginButton: {
    backgroundColor: '#F5F5F5',
    color: '#0B0809',
    padding: '8px 16px',
    borderRadius: '9999px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  bookButton: {
    backgroundColor: '#3643FB',
    color: '#F5F5F5',
    padding: '8px 16px',
    borderRadius: '9999px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  hero: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #e5e7eb',
    padding: '24px 0',
  },
  pageTitle: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0B0809',
    margin: '0 0 8px 0',
    padding: 0,
    lineHeight: '1.2',
    width: 'auto',
    display: 'block',
    textAlign: 'left' as const,
  },
  pageSubtitle: {
    color: '#333333',
    fontSize: '16px',
  },
  main: {
    padding: '32px 0',
    backgroundColor: '#F5F5F5',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
  },
  gridDesktop: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '24px',
  },
  sidebar: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
  },
  sidebarHeader: {
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0B0809',
  },
  clearButton: {
    backgroundColor: 'transparent',
    color: '#3643FB',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  sidebarContent: {
    padding: '16px',
  },
  filterSection: {
    marginBottom: '24px',
  },
  filterTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#0B0809',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e5e7eb',
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  filterOption: {
    display: 'flex',
    alignItems: 'center',
  },
  filterLabel: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#333333',
  },
  rangeContainer: {
    padding: '0 8px',
    marginTop: '16px',
  },
  rangeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#333333',
    marginTop: '8px',
  },
  doctorList: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    marginBottom: '24px',
  },
  doctorListHeader: {
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doctorListTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0B0809',
  },
  doctorCount: {
    fontSize: '14px',
    color: '#333333',
  },
  doctorCard: {
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
  },
  doctorGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  doctorGridDesktop: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '16px',
  },
  doctorProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: '16px',
    borderRadius: '8px',
  },
  doctorImageContainer: {
    width: '128px',
    height: '128px',
    borderRadius: '9999px',
    overflow: 'hidden',
    border: '4px solid white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    marginBottom: '12px',
    position: 'relative',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  doctorName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0B0809',
    marginBottom: '4px',
    textAlign: 'center',
  },
  doctorSpecialty: {
    fontSize: '14px',
    color: '#333333',
    marginBottom: '4px',
    textAlign: 'center',
  },
  experienceBadge: {
    padding: '4px 10px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 500,
    backgroundColor: '#E0E7FF',
    color: '#4338CA',
    marginBottom: '4px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  star: {
    color: '#FACC15',
    marginRight: '4px',
  },
  ratingValue: {
    fontWeight: 'bold',
  },
  doctorDetails: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  doctorDetailsDesktop: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  infoSection: {
    marginBottom: '12px',
  },
  infoLabel: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  infoValue: {
    color: '#0B0809',
  },
  fee: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0B0809',
  },
  bookAppointmentButton: {
    width: '100%',
    backgroundColor: '#3643FB',
    color: '#F5F5F5',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: '20px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
  },
  paginationList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  paginationItem: {
    margin: '0 4px',
  },
  paginationButton: {
    padding: '8px 12px',
    border: '1px solid #D1D5DB',
    fontSize: '14px',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
  },
  paginationButtonActive: {
    backgroundColor: '#3643FB',
    color: '#F5F5F5',
    borderColor: '#3643FB',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #e5e7eb',
    padding: '24px 0',
    marginTop: '32px',
  },
  footerContent: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#6B7280',
  },
};

export default function DoctorListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    gender: '',
    experience: '',
    availability: [] as string[],
    language: [] as string[],
    location: '',
    fee: { min: 0, max: 2000 },
  });

  const pageSize = 2; // Show only 2 doctors per page to demonstrate pagination
  
  // Calculate start and end indices for pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  // Get paginated doctors based on current page
  const doctors = mockDoctors.slice(startIndex, endIndex);
  const totalDoctors = mockDoctors.length;
  const totalPages = Math.ceil(totalDoctors / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (type: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  // Check if window is available (client-side)
  const [isDesktop, setIsDesktop] = useState(false);

  // Use useEffect to set the correct value after component mounts
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <a href="/" style={styles.logo}>Apollo247</a>

            {isDesktop && (
              <nav style={styles.nav}>
                <a href="#" style={styles.navLink}>Doctors</a>
                <a href="#" style={styles.navLink}>Medicines</a>
                <a href="#" style={styles.navLink}>Lab Tests</a>
                <a href="#" style={styles.navLink}>Health Records</a>
              </nav>
            )}

            <div style={styles.authButtons}>
              {isDesktop && <button style={styles.loginButton}>Login / Sign Up</button>}
              <button style={styles.bookButton}>Book Appointment</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section with exact width/height as specified in requirements */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6B7280' }}>Home</span>
            <span style={{ fontSize: '14px', color: '#6B7280', margin: '0 8px' }}>/</span>
            <span style={{ fontSize: '14px', color: '#6B7280' }}>Doctors</span>
            <span style={{ fontSize: '14px', color: '#6B7280', margin: '0 8px' }}>/</span>
            <span style={{ fontSize: '14px', color: '#3643FB', fontWeight: 500 }}>General Physician</span>
          </div>
          <h1 style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0B0809',
            margin: '0 0 8px 0',
            padding: 0,
            lineHeight: '32px', /* Maintains 32px height as specified */
            maxWidth: '100%', /* Allow full width to display complete text */
            display: 'block',
            whiteSpace: 'normal', /* Allow text to wrap if needed */
            overflow: 'visible',
          }}>General Physician / Internal Medicine</h1>
          <p style={{
            ...styles.pageSubtitle,
            fontSize: '16px',
            color: '#333333',
            lineHeight: '1.5'
          }}>Find and book appointments with top doctors in your area</p>
        </div>
      </section>

      {/* Main content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={isDesktop ? styles.gridDesktop : styles.grid}>
            {/* Filter sidebar */}
            <div style={styles.sidebar}>
              <div style={styles.sidebarHeader}>
                <h2 style={styles.sidebarTitle}>Filters</h2>
                <button
                  style={styles.clearButton}
                  onClick={() => {
                    setFilters({
                      gender: '',
                      experience: '',
                      availability: [],
                      language: [],
                      location: '',
                      fee: { min: 0, max: 2000 },
                    });
                  }}
                >
                  Clear All
                </button>
              </div>

              <div style={styles.sidebarContent}>
                {/* Gender filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Gender</h3>
                  <div style={styles.filterOptions}>
                    <div style={styles.filterOption}>
                      <input
                        type="radio"
                        id="gender-male"
                        name="gender"
                        value="male"
                        checked={filters.gender === 'male'}
                        onChange={(e) => handleFilterChange('gender', e.target.value)}
                      />
                      <label style={styles.filterLabel} htmlFor="gender-male">Male</label>
                    </div>
                    <div style={styles.filterOption}>
                      <input
                        type="radio"
                        id="gender-female"
                        name="gender"
                        value="female"
                        checked={filters.gender === 'female'}
                        onChange={(e) => handleFilterChange('gender', e.target.value)}
                      />
                      <label style={styles.filterLabel} htmlFor="gender-female">Female</label>
                    </div>
                  </div>
                </div>

                {/* Experience filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Experience</h3>
                  <div style={styles.filterOptions}>
                    {experienceFilters.map(option => (
                      <div key={option.id} style={styles.filterOption}>
                        <input
                          type="radio"
                          id={`experience-${option.id}`}
                          name="experience"
                          value={option.id}
                          checked={filters.experience === option.id}
                          onChange={(e) => handleFilterChange('experience', e.target.value)}
                        />
                        <label style={styles.filterLabel} htmlFor={`experience-${option.id}`}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Availability</h3>
                  <div style={styles.filterOptions}>
                    {availabilityFilters.map(option => (
                      <div key={option.id} style={styles.filterOption}>
                        <input
                          type="checkbox"
                          id={`availability-${option.id}`}
                          value={option.id}
                          checked={(filters.availability as string[]).includes(option.id)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const isChecked = e.target.checked;
                            const currentValues = [...filters.availability];

                            if (isChecked) {
                              handleFilterChange('availability', [...currentValues, value]);
                            } else {
                              handleFilterChange('availability', currentValues.filter(v => v !== value));
                            }
                          }}
                        />
                        <label style={styles.filterLabel} htmlFor={`availability-${option.id}`}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Location</h3>
                  <div style={styles.filterOptions}>
                    {locationFilters.map(option => (
                      <div key={option.id} style={styles.filterOption}>
                        <input
                          type="radio"
                          id={`location-${option.id}`}
                          name="location"
                          value={option.id}
                          checked={filters.location === option.id}
                          onChange={(e) => handleFilterChange('location', e.target.value)}
                        />
                        <label style={styles.filterLabel} htmlFor={`location-${option.id}`}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Languages</h3>
                  <div style={styles.filterOptions}>
                    {languageFilters.map(option => (
                      <div key={option.id} style={styles.filterOption}>
                        <input
                          type="checkbox"
                          id={`language-${option.id}`}
                          value={option.id}
                          checked={(filters.language as string[]).includes(option.id)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const isChecked = e.target.checked;
                            const currentValues = [...filters.language];

                            if (isChecked) {
                              handleFilterChange('language', [...currentValues, value]);
                            } else {
                              handleFilterChange('language', currentValues.filter(v => v !== value));
                            }
                          }}
                        />
                        <label style={styles.filterLabel} htmlFor={`language-${option.id}`}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fee Range filter */}
                <div style={styles.filterSection}>
                  <h3 style={styles.filterTitle}>Consultation Fee</h3>
                  <div style={styles.rangeContainer}>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="100"
                      value={filters.fee.max}
                      onChange={(e) => handleFilterChange('fee', { min: 0, max: parseInt(e.target.value) })}
                      style={{ width: '100%' }}
                    />
                    <div style={styles.rangeLabels}>
                      <span>₹0</span>
                      <span>₹{filters.fee.max}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor listing */}
            <div>
              <div style={styles.doctorList}>
                <div style={styles.doctorListHeader}>
                  <h2 style={styles.doctorListTitle}>Available Doctors</h2>
                  <div style={styles.doctorCount}>
                    Showing {doctors.length} of {totalDoctors} doctors
                  </div>
                </div>

                <div>
                  {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                      <div key={doctor._id} style={styles.doctorCard}>
                        <div style={isDesktop ? styles.doctorGridDesktop : styles.doctorGrid}>
                          <div style={styles.doctorProfile}>
                            <div style={styles.doctorImageContainer}>
                              <img
                                src={doctor.imageUrl}
                                alt={doctor.name}
                                style={styles.doctorImage}
                              />
                            </div>
                            <h3 style={styles.doctorName}>{doctor.name}</h3>
                            <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
                            <div style={styles.experienceBadge}>
                              {doctor.experience} Years Experience
                            </div>
                            <div style={styles.rating}>
                              <span style={styles.star}>★</span>
                              <span style={styles.ratingValue}>{doctor.rating.toFixed(1)}</span>
                            </div>
                          </div>

                          <div style={isDesktop ? styles.doctorDetailsDesktop : styles.doctorDetails}>
                            <div>
                              <div style={styles.infoSection}>
                                <h4 style={styles.infoLabel}>Qualification</h4>
                                <p style={styles.infoValue}>{doctor.qualification}</p>
                              </div>

                              <div style={styles.infoSection}>
                                <h4 style={styles.infoLabel}>Hospital</h4>
                                <p style={styles.infoValue}>{doctor.hospital}, {doctor.location}</p>
                              </div>

                              <div style={styles.infoSection}>
                                <h4 style={styles.infoLabel}>Languages</h4>
                                <p style={styles.infoValue}>{doctor.languages.join(', ')}</p>
                              </div>
                            </div>

                            <div>
                              <div style={styles.infoSection}>
                                <h4 style={styles.infoLabel}>Availability</h4>
                                <p style={styles.infoValue}>{doctor.availability.join(', ')}</p>
                              </div>

                              <div style={styles.infoSection}>
                                <h4 style={styles.infoLabel}>Consultation Fee</h4>
                                <p style={styles.fee}>₹{doctor.consultationFee}</p>
                              </div>

                              <button style={styles.bookAppointmentButton}>
                                Book Appointment/Consult Online
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '48px 16px', textAlign: 'center' }}>
                      <p style={{ marginBottom: '8px', fontSize: '18px', fontWeight: 'bold', color: '#0B0809' }}>
                        No doctors found
                      </p>
                      <p style={{ color: '#6B7280' }}>
                        Try adjusting your filters to see more results.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pagination */}
              <div style={styles.pagination}>
                <ul style={styles.paginationList}>
                  <li style={styles.paginationItem}>
                    <button
                      style={styles.paginationButton}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                  </li>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={pageNumber} style={styles.paginationItem}>
                        <button
                          style={{
                            ...styles.paginationButton,
                            ...(currentPage === pageNumber ? styles.paginationButtonActive : {})
                          }}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      </li>
                    );
                  })}

                  <li style={styles.paginationItem}>
                    <button
                      style={styles.paginationButton}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <p>Made by Sagnik Ray</p>
            <p style={{ marginTop: '8px', fontWeight: 500 }}>For Andaz Kumar's Full Stack Development internship</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
