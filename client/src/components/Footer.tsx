import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AscentoAbacus</h3>
            <p className="text-gray-300">
              Nurturing young minds through innovative learning methods and holistic development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white">Our Courses</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                +91 9818613720
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                info@ascentoabacus.com
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                D-168C, Dwarka Mor, Patel Garden, Sector 15 Dwarka, Dwarka, Delhi, 110078
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} AscentoAbacus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;