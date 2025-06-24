// src/components/Header/Header.jsx
import React from 'react';

// Custom CSS specific to the header component
const headerStyles = `
    .text-growvy-green {
        color: #4CAF50; /* A vibrant green similar to the logo */
    }
    .nav-link-underline:hover {
        border-bottom: 2px solid #4CAF50; /* Green underline on hover */
        padding-bottom: 2px; /* Adjust padding to make space for the line */
    }
`;

function Header() {
  return (
    <>
      {/* Inject header-specific styles */}
      <style>{headerStyles}</style>

      {/* Header/Navigation Bar */}
      {/* Classes for border, rounded corners, and horizontal padding/margin */}
      <header className="bg-white border border-black rounded-full py-4 mx-4 md:mx-10 mt-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-growvy-green font-medium rounded-md nav-link-underline">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-growvy-green font-medium rounded-md nav-link-underline">Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-growvy-green font-medium rounded-md nav-link-underline">Success</a></li>
              <li><a href="#" className="text-gray-600 hover:text-growvy-green font-medium rounded-md nav-link-underline">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-growvy-green font-medium rounded-md nav-link-underline">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
