import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
    <main className='w-full flex justify-center mt-[10%]'>
    <footer className="w-[95%] bg-gray-100 py-8">
      <div className="container mx-auto px-auto ">
        <div className="flex">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-center px-4 pt-4">
            <h3 className="text-xl font-semibold mb-4">Why Click Matrics?</h3>
            <ul>
              <li className="mb-2"><Link to="/integrations-api" className="hover:underline">Integrations & API</Link></li>
              <li className="mb-2"><Link to="/enterprise-class" className="hover:underline">Enterprise Class</Link></li>
              <li className="mb-2"><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-center px-4 pt-4">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul>
              <li className="mb-2"><Link to="/url-shortener" className="hover:underline">URL Shortener</Link></li>
              <li className="mb-2"><Link to="/qr-codes" className="hover:underline">QR Codes</Link></li>
              <li className="mb-2"><Link to="/2d-barcodes" className="hover:underline">2D Barcodes</Link></li>
              <li className="mb-2"><Link to="/analytics" className="hover:underline">Analytics</Link></li>
              <li className="mb-2"><Link to="/pages" className="hover:underline">Pages</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 px-4 pt-4 text-center">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><Link to="/about" className="hover:underline">About Click Matrics</Link></li>
              <li className="mb-2"><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li className="mb-2"><Link to="/diversity-inclusion" className="hover:underline">Diversity & Inclusion</Link></li>
              <li className="mb-2"><Link to="/partners" className="hover:underline">Partners</Link></li>
              <li className="mb-2"><Link to="/press" className="hover:underline">Press</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li className="mb-2"><Link to="/reviews" className="hover:underline">Reviews</Link></li>
              <li className="mb-2"><Link to="/accessibility-report" className="hover:underline">Accessibility Report</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <p className="text-sm">© 2024 Click Matrics | Handmade in India and all over the world.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
    </main>
    </>
  );
};

export default Footer;
