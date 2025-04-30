import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32 mr-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="text-xl font-bold text-apollo-blue">Apollo247</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-apollo-dark hover:text-apollo-blue font-medium text-sm">
              Doctors
            </Link>
            <Link href="#" className="text-apollo-dark hover:text-apollo-blue font-medium text-sm">
              Medicines
            </Link>
            <Link href="#" className="text-apollo-dark hover:text-apollo-blue font-medium text-sm">
              Lab Tests
            </Link>
            <Link href="#" className="text-apollo-dark hover:text-apollo-blue font-medium text-sm">
              Health Records
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gray-100 text-apollo-dark hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Login / Sign Up
            </button>
            <button className="bg-apollo-blue text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
