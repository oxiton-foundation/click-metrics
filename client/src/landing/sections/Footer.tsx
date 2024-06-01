"use client"
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <main className='w-full mt-[40%] sm:mt-[20%]'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-[80%] sm:w-[30%] mx-auto sm:text-center">
      Quick Links
    </h2>
        <footer className="w-full flex items-center py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/3 mb-8 sm:mb-0 sm:text-center px-4 pt-4">
                <h3 className="text-xl font-semibold mb-4 ">Why Click Matrics?</h3>
                <ul>
                  <li className="mb-2"><Link to="/integrations-api" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Integrations & API</Link></li>
                  <li className="mb-2"><Link to="/enterprise-class" className="hover:bg-gray-200 hover:text-black px-2 py-1 rounded">Enterprise Class</Link></li>
                  <li className="mb-2"><Link to="/pricing" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Pricing</Link></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 mb-8 sm:mb-0 sm:text-center px-4 pt-4">
                <h3 className="text-xl font-semibold mb-4">Products</h3>
                <ul>
                  <li className="mb-2"><Link to="/url-shortener" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">URL Shortener</Link></li>
                  <li className="mb-2"><Link to="/qr-codes" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">QR Codes</Link></li>
                  <li className="mb-2"><Link to="/2d-barcodes" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">2D Barcodes</Link></li>
                  <li className="mb-2"><Link to="/analytics" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Analytics</Link></li>
                  <li className="mb-2"><Link to="/pages" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Pages</Link></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 px-4 pt-4  sm:text-center">
                <h3 className="text-xl font-semibold mb-4">Company</h3>
                <ul>
                  <li className="mb-2"><Link to="/about" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">About Click Matrics</Link></li>
                  <li className="mb-2"><Link to="/careers" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Careers</Link></li>
                  <li className="mb-2"><Link to="/diversity-inclusion" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Diversity & Inclusion</Link></li>
                  <li className="mb-2"><Link to="/partners" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Partners</Link></li>
                  <li className="mb-2"><Link to="/press" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Press</Link></li>
                  <li className="mb-2"><Link to="/contact" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Contact</Link></li>
                  <li className="mb-2"><Link to="/reviews" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Reviews</Link></li>
                  <li className="mb-2"><Link to="/accessibility-report" className="hover:bg-gray-200 px-2 py-1 rounded hover:text-black">Accessibility Report</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t pt-4">
              <p className="text-sm text-center sm:text-left">© 2024 Click Matrics | Handmade in India and all over the world.</p>
              <div className="flex justify-center mt-4 sm:mt-0 space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 hover:text-black"><FaTwitter size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900 hover:text-black"><FaInstagram size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900 hover:text-black"><FaFacebook size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900 hover:text-black"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;
